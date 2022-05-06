import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngChangeDetection';
  // variable para el ejemplo de de reatach
  public live: boolean = true;

  // valores para el ejemplo de Async Pipe
  public items = [{}];
  public items$ = new BehaviorSubject(this.items); // le pasamos un valor por defecto


  addItem() {
    const newItem = Math.floor(Math.random() * 100) + 1;
    this.items.push({
      numero: newItem
    });

    // Emitimos un nuevo valor de la lista de items
    // al componente suscrito
    this.items$.next(this.items)

  }

}

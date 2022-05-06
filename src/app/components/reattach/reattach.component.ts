import { Component, OnInit, Injectable, ChangeDetectorRef, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PrecioBitCoinProvider {
  public precio: number = 100;
  constructor() {
    // cada medio segundo se va a generr un nuevo precio del bitCoin
    setInterval(()=>{
      this.precio = Math.floor(Math.random()*1000) + 100;
      console.log(`Precio actual ${this.precio}$`)
    },500)
  }
}


@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.scss'],
  inputs: ['enVivo']
})
export class ReattachComponent implements OnInit {

  public mostrarEnVivo: boolean = true;

  constructor(private ref: ChangeDetectorRef, public precioBitcoin: PrecioBitCoinProvider) { }

  // @Input() set enVivo(valor: boolean) {
  //   console.log({valor})
  //   this.mostrarEnVivo = valor;
  //   if (valor) {
  //     this.ref.reattach(); // Reacoplamos el TS y HTML para ver los cambios en vivo
  //   }else {
  //     this.ref.detach(); // Desacoplamos el TS y HTML para no actualizar la vista con los cambios
  //   }
  // }
  set enVivo(valor: boolean) {
    console.log({valor})
    this.mostrarEnVivo = valor;
    if (valor) {
      this.ref.reattach(); // Reacoplamos el TS y HTML para ver los cambios en vivo
    }else {
      this.ref.detach(); // Desacoplamos el TS y HTML para no actualizar la vista con los cambios
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss']
})
export class NgZoneComponent implements OnInit {

  public progress: number = 0; // valor q va ir de 0% a 100%  
  public text: string = ''; // Dentro / Fuera Angular Zone ngZone

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }


  /* 
    * Metodo para incrementar de 0 a 100 el valor del progresp
    * @param terminar Callback que se ejecuta al terminar el incremento
  */
  incrementarProgress(terminar: () => void) {
    if (this.progress < 100) {
      this.progress += 1; // incrementamos el progreso en 1
      console.log(`El progreso actual: ${this.progress}%`);
      window.setTimeout(() => {
        this.incrementarProgress(terminar);// recursividad para seguir incrementando
      }, 10)
    } else {
      // ya habria terminado de incrementarse
      // ejecutamos el callback
      terminar();

    }
  }

  /*
    * Dentro AngularZone
    * Metodo que aumenta el progreso dentro del ngzone, Implica que los cambios se ven en el HTML
  */
  aumentarDetroNgZone() {
    this.text = 'DENTRO';
    this.progress = 0; // Lo reseteamos para la ejecucion desde 0%
    this.incrementarProgress(() => console.log(`${this.text} de angularZone: incremento terminado`))
  }


  /*
  * Fuera AngularZone
  * Metodo que aumenta el progreso fuera del ngzone, Implica que los cambios no se van a ver en el HTML hasta que volvamos a meter el coponente en el AngularZone
*/
  aumentarFueraNgZone() {
    this.text = 'FUERA';
    this.progress = 0; // Lo reseteamos para la ejecucion desde 0%

    // EJECUTAMOS FUERA DE ANGULAR ZONE
    this.ngZone.runOutsideAngular(() => {
      this.incrementarProgress(() => {
        // cuando termine de incrementar 
        // es cuando pasamos a ejecutar en Angular zone de nuevo
        // Volvemos a reacoplar el componente TS y HTML
        this.ngZone.run(() => {
          console.log(`${this.text} de angularZone: incremento terminado`)
        })
      })
    })
  }

}

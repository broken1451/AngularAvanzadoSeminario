import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default // hace el mismo comportamiento de angular 
  changeDetection: ChangeDetectionStrategy.OnPush // no se actualiza la vista, onPush solo va a pintar el primer valor q recibe y luego manualmente nosotros tendriamos q  forzar a ala actualizacion del componoente
})
export class OnPushComponent implements OnInit {

  /*
    * valor que se va a incrementar cada segundo en el archivo TS
    * y que dependiendo de la estrategia de change Detection sus cambios se van a poder ver en el HTML
  */
  public segundos: number = 0;

  constructor() { }

  ngOnInit(): void {


    setInterval(()=>{
      // Incrementamos el valor de segundos
      this.segundos++
      // Mostramos el valor por consola
      console.log(`segundos transcurridos ${this.segundos}`)
    },1000)

  }

}

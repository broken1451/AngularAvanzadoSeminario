import { Component, OnInit, ChangeDetectorRef, Injectable, ChangeDetectionStrategy } from '@angular/core';
import * as mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class DataListProvider {
  
  /* 
    *  metodo de quevuelve una lista de nombres aleatorios
    * @return { [] } lista de nombres
  */
  get data(){
    const RandomNme = mock.Random;
    return [
        RandomNme.first(),
        RandomNme.first(),
        RandomNme.first(),
        RandomNme.first(),
      ];
    
  }
}


@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss']
})
export class DetachComponent implements OnInit {
  // npm i mockjs
  // npm i --save @types/mockjs
  constructor(private changeDetectorRef: ChangeDetectorRef, public dataListProvider: DataListProvider ) { }

  ngOnInit(): void {

    // Desacoplar el componente del html con el metodo detach
    this.changeDetectorRef.detach();

    // cuando un componente esta desacoplado (TS y HTML) solo hay 2 formas de decirle que replique los cambios en el HTML
    /*
      * 1) detectChanges() --> Detectar los cambios en ese  momento y actualizar HTML
      * 2) reattach() --> (mostrado en el otro componente) sirve para volver a acoplar el componente TS y HTML
    */

    // Cada 3 segundos, le decimos a angular q revise los nombres generados
    // Es decir, que detecte los cambios en el componente y los replique en el html


    setInterval(()=>{
      // detectamos los cambios y reacoplamos puntualmente el componente
      this.changeDetectorRef.detectChanges();
    },3000)
  }

}

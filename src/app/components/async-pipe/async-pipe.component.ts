import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {

  @Input() item$!: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.item$.subscribe(e=> console.log(e)))

  }

}

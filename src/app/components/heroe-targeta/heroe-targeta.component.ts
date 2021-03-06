import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {

  @Input() heroe:any={};
  @Input() index:number;

  @Output() heroSeleccionado:EventEmitter<number>;

  constructor( private router:Router) {

    this.heroSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }


  verHeroe(){
    // console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    // this.heroSeleccionado.emit(this.index);
}

}

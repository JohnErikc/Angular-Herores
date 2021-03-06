import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit {

  Heroe:any={};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesservice:HeroesService,
              private router:Router) {

      this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);      
      this.Heroe = this._heroesservice.getHeroe(params['id']);
      console.log(this.Heroe);
      
    });
   }

  ngOnInit(): void {
  }

}

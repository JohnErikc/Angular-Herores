import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor( private _heroesService:HeroesService,
               private router:Router 
    ) {
    
      console.log("Contructor");
  
   }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
    console.log("ngOnInit");

  }

  verHeroe(idx:number){
      console.log(idx);
      this.router.navigate(['/heroe', idx])
  }

}

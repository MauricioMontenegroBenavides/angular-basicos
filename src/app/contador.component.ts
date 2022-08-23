import {Component} from '@angular/core';
@Component({
    selector:'mauricio',
    template:`<h2>CUARTO EJERCICIO</h2>
    <h2>{{'TABLA DEL'+numero22}}</h2>
    <h2>{{resp}}</h2>
    <button  (click)="multiplicar(numero22)">multiplicar</button>
    <span>{{numero22 +'x'+numero11+'='+resp}}</span>`
})

export class Primera{

  numero11:number=1
  numero22:number=3;
  resp:number=1

  multiplicar(nu:number){
    this.numero11=this.numero11+1;
    this.resp=this.numero11*nu;
    
 }
}
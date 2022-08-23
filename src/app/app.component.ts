import { Component } from '@angular/core';// importamos un decorador Component 

@Component({// El decorador recibe un objeto 
  selector: 'app-root',// nombre del selector 
  templateUrl: './app.component.html',// la contraparte de html 
  //styleUrls: ['./app.component.css']
  //template:'<span>Fernando</span> <span>{{numero}}</span>' // permite definir un template literal o un string 
})

export class AppComponent {
  public title:string = 'bases';// Se puede poner el tipado y el encapsulamiento 
  numero:number=10;
  numero2:number=30;
  numero3:number=40;
  base:number=8;
  sumar(){
    this.numero=this.numero+1;
  }
  acumular(base:number){
    this.numero3=this.numero3+base;
   } 
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
 // OnInit es el primer ciclo de vida de angular se conforma por el constructor y el ngOnInit()
 // Los ciclos de vida son ciertos metodos que disparan angular de forma automatica
 //constructor() { }// Primero se dispara el constructor despues el ngOnInit
 // ngOnInit(): void {// Este metodo se utiliza para inicializar cosas, como peticiones a servicios 
 //}
 // Los ciclos de vida(OnInit)son los que dispara angular de forma automatica
 heroes:string[]=['spiderman', 'iroman' ,'hulk']// Esta es una propiedad
 borrado:string='';
 borrar(){
  const borrador=this.heroes.shift();
  this.borrado=borrador||'';
 } 
}

// El objetivo de los modulos es encapsular 
// Hay modulos que son cargados bajo demanada 

import { Component } from "@angular/core";

@Component({
    selector:'hola',
    templateUrl:'ejercicio.component.html',
})

export class vamos{
    nom:string='mauricio'
    fun(){
        return this.nom
    }
}
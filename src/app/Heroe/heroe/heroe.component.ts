import{Component} from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',
})

export class nuevo{
    nombre:string='spiderman'
    edad:number= 45

    obtener():string{
        // Si no retorna nada la funcion es un string
        return `${this.nombre} -- ${this.edad}`
    }
    
   
    get obtener2(){
        return this.nombre.toUpperCase() 
    }

    cambiarNombre ():void{
      
        this.nombre='iroman'
    }

    cambiarEdad ():void{
        this.edad=30;
       
    }
}

// Para crear componentes de manera  automatica 
// -  ng g component Heroe/listado


import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { nuevo } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[// Las declaraciones dicen que cosas contiene este modulo:Componentes, pipes 
      nuevo,
      ListadoComponent,
    ],
    imports:[// Aqui van modulos
     CommonModule// 
    ],
    exports:[nuevo,ListadoComponent],// Aqui declaro que cosas quiero que sean visible en el modulo 
      
    
})

export class HeroesModule{}
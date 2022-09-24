import { Component, OnInit } from '@angular/core';

import { RecetasService } from '../services/recetas.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private recetaService: RecetasService) { }
  
 
    get recetas(){
      return this.recetaService.recetas
      
    }
    ngOnInit(): void {
      
    this.recetaService.getReceta()
    
  }

  eliminarReceta(id: any){
   if( confirm('Eliminar Receta?')){
    this.recetaService.deleteReceta(id).subscribe(
      (res) => {this.ngOnInit()},
      (err) => console.error(err)
    )
   }
   console.log(id)
   
  }

}

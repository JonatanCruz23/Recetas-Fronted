import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from 'src/app/model/receta';


@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  ruta= 'http://localhost:3000/receta'

  selectedReceta = {
    _id: '',
    nombre:  '',
    portada: '',
    descripcion: '',
    ingredientes:[
      {
        nombre: '',
        cantidad: ''
      }
    ]
  }
  
  recetas: Receta[] = []
 
  constructor(private http:HttpClient) { }

  crearReceta(receta: Receta){
    return this.http.post(this.ruta, receta);
  }

  getReceta(){
    return   this.http.get<Receta[]>(this.ruta).subscribe( response => {
      console.log(response)
      this.recetas = response
    })
  }

  deleteReceta(_id: string){
    return this.http.delete(`${this.ruta}/${_id}`)
  }
  
}

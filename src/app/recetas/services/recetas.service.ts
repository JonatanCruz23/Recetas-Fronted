import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from 'src/app/model/receta';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiZXNhdWciLCJpZCI6IjYzMmYzNzI1MjA3NDFjNmQyN2NhNjVjNCIsImlhdCI6MTY2NDA0MDUzOCwiZXhwIjoxNjY0MDQwODM4fQ.zpRpSLBpIR1FQLBdmducfkEgMj7mk5FeBBxazj7nv7I'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  ruta= 'https://api-recetas-modulo-v.herokuapp.com/receta'

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

  /*
  {
    "portada": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVtYubQj2BXuEY5SkfIoS434pOJbEcsa28Q",
    "_id": "6313800611542f08307fbbe6",
    "nombre": "Pescado frito",
    "descripcion": "descripcion de pescado frito",
    "ingredientes": [
      {
        "nombre": "Pescado",
        "cantidad": "Un pescado de 2 libras",
        "_id": "6313800611542f08307fbbe7"
      }
    ],
    "estado": true,
    "__v": 0
  }
  */
  
  recetas: Receta[] = []

  constructor(private http:HttpClient) { }

  crearReceta(receta: Receta){
    return this.http.post(this.ruta, receta);
  }

  getReceta(){
    return   this.http.get<Receta[]>(this.ruta, httpOptions).subscribe( response => {
      console.log(response)
      this.recetas = response
    })
  }

  deleteReceta(_id: string){
    return this.http.delete(`${this.ruta}/${_id}`)
  }
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public recetaService: RecetasService) { }

  ngOnInit(): void {
  }

  addReceta(form: NgForm){
    this.recetaService.crearReceta(form.value).subscribe(
      res => console.log(res)
    )
  
    

    console.log(form.value)

  }

}

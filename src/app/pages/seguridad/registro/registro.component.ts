import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { SeguridadService } from '../services/seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private SeguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  // registrarUsuario(form: NgForm){
  //     this.SeguridadService.registrarUsuario({
  //       email: form.value.email,
  //       password: form.value.password,
  //       apellidos: form.value.apellidos,
  //       nombre: form.value.nombre,
  //       username: form.value.username,
  //       usuarioId: ''
  //     })
  // }
}

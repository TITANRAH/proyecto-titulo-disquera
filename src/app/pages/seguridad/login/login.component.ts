import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../services/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguridadService : SeguridadService) { }

  ngOnInit(): void {
  }

  // le pasamos los datos generados en el formulario email y password en un objeto
  loginUsuario(form: NgForm){
    this.seguridadService.login({
      email: form.value.email, 
      password: form.value.password
    });
  }
}

import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login-data-interface';
import { Usuario } from '../interfaces/usuario.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private token!: any;

  baseUrlUser = environment.baseUrlUser


  // cada vez que se registre un nuevo usuario 
  // necesito que se dispare un evento con subject
  // y puedo llamar este objeto en cualquioer componente
  // enste caso en el componente barra para ocultar lo botnes regitar y login
  seguridadCambio = new Subject<boolean>()

  private usuario!: Usuario;

  getToken(){
    //DEVUELVO EL TOKEN
    return this.token;
    //AHORA NECESITO QUE EL SEGURIDAD INTERCEPTOR TENGA ACCESO 
  }

  constructor(private router: Router,
              private http: HttpClient) { }

  // necesitamos enviar desde aca, el cliente, la data a registrar
  // la variable usuario tiene que setearse con el parametro que envio desde fuera

  // LO QUE ENVIAMOS 
  registrarUsuario(usr: Usuario) {

    // this.usuario = {
    //   email: usr.email,
    //   nombre: usr.nombre,
    //   usuarioId: Math.round(Math.random() * 10000).toString(),
    //   apellidos: usr.apellidos,
    //   username: usr.username,
    //   password: '',
    // };

    // con esto cada vez que un usuario se registre se 
    // disparara un evento 
    // this.seguridadCambio.next(true);
    // this.router.navigate(['/'])
  }

  // LO QUE RECIBIMOS
  login(loginData: LoginData) {
    console.log('login data',loginData)
    const endPoint = 'usuario/login'

    this.http.post<Usuario>(`${this.baseUrlUser}${endPoint}`, loginData)
    .subscribe((resp)=> {
      console.log('login data',loginData)
      console.log('respuesta del login',resp)
      // CARGO EL TOKEN A LA VARIABLE TOKEN DECLARADA
      this.token = resp.token;
      this.usuario = {
        email: resp.email,
        nombre: resp.nombre,
        apellidos: resp.apellidos,
        token: resp.token,
        password:'',
        username: resp.username,
        usuarioId: resp.usuarioId
      };

      this.seguridadCambio.next(true);
      this.router.navigate(['/listado'])
    });

    // this.usuario = {
    //   email: loginData.email,
    //   usuarioId: Math.round(Math.random() * 10000).toString(),
    //   nombre: '',
    //   apellidos: '',
    //   username: '',
    //   password:'',
    // }
  // con esto cada vez que un usuario se loguee se 
    // disparara un evento 
    // this.seguridadCambio.next(true);
    // this.router.navigate(['/listado'])
  }

 

  logout() {
    // this.usuario = {
    //   email: '',
    //   usuarioId: '',
    //   nombre: '',
    //   apellidos: '',
    //   username: '',
    //   password: '',
    // }

      // con esto cada vez que un usuario se desloguee se 
    // disparara un evento en false
    this.seguridadCambio.next(false);
    this.router.navigate(['/'])
  }

  // devuelve el usuario mas actualizado con operador sprit
  getUser() {
    return { ...this.usuario }
  }

  
  // esto me sirve para el guard implementado
  onSesion(){
    // esto devuelve un true o un false
    // si hay usuario esta declaracioon es false
    // si no hay usuario esta dlaracion es true
    return this.usuario != null;
  }




}

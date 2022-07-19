import { Injectable } from '@angular/core';
import { Autor } from '../pages/discos/interfaces/autor.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  baseUrl = environment.baseUrl;

  private autoresSubject:any = new Subject<Autor[]>();
  private autoresLista: Autor[]=[];

  constructor(private http : HttpClient) { }

  crearAutor(autor: Autor){
    let endPoint = 'DisqueraAutor'
    this.http.post(`${this.baseUrl}${endPoint}`,autor ).subscribe((resp)=>{
      this.autoresSubject.next();
    })
  }

  getActualAutor(){
    return this.autoresSubject.asObservable();
  }

  getAutores(){ 
    let endPoint = 'DisqueraAutor';
    this.http.get<Autor[]>(`${this.baseUrl}${endPoint}`).subscribe((resp)=>{
      this.autoresLista = resp
      this.autoresSubject.next([...this.autoresLista])
     
    })
    
  }

  getActualList(){
    return this.autoresSubject.asObservable();
  }
}






// private autoresLista: Autor[]=[
  //   {autorId: 1, nombre: 'Sergio', seudonimo:'Gran Rah', estilo: 'Rap', nombreCompleto: 'Sergio Miranda'},
  //   {autorId: 2, nombre: 'Juan', seudonimo:'Gran Rah', estilo: 'Rap', nombreCompleto: 'Sergio Miranda'},
  //   {autorId: 3, nombre: 'Diego', seudonimo:'Gran Rah', estilo: 'Rap', nombreCompleto: 'Sergio Miranda'},
  //   {autorId: 4, nombre: 'Tipin', seudonimo:'Tipote', estilo: 'cueca gerundia', nombreCompleto: 'Tipin Tipon'}
  // ]
 //console.log('respuesta del endpoint', resp)
// return this.autoresLista.slice();

// la secuencia es , el componente que requiere tener la lista de autores
// lo primero es ejecutar obtener autores, y luego llamr al get actual list 
// este es el que devuelve la data fuinalmente acutalizada
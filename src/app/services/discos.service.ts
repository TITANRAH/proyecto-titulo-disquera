import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Disco } from '../pages/discos/interfaces/disco.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pagination } from '../pages/discos/interfaces/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {
  
  baseUrl = environment.baseUrl;

  discoPagination!: Pagination;
  discoSubject:any = new Subject();
  discosPaginationSubject = new Subject<Pagination>();
  
  //discosSubjet = new Subject();
  private discos: Disco[] = [];

  // private discos: Disco[] = [
  //  {discoId: 1, titulo: 'Musageta', descripcion: 'rap', precio: 10 ,autor: 'juan perez' },
  //  {discoId: 2, titulo: 'Titan', descripcion: 'rap', precio: 32 ,autor: 'juan perez' },
  //  {discoId: 3, titulo: 'Apogeo', descripcion: 'rap', precio: 4 ,autor: 'juan perez'},
  //  {discoId: 4, titulo: 'the end', descripcion: 'rap', precio: 4 ,autor: 'juan perez',},
  // ];

  constructor(private http: HttpClient) { }

  obtenerDiscos(discosPorPagina: number, 
                paginaActual: number, 
                sort: any,
                sortDirection: string,
                filterValue: any) {

    let endPoint = 'disco/pagination'

    // esta sera la peticion que le haremos al backend
    //y va al final de mi peticion http
    const request = {
      pageSize: discosPorPagina,
      page: paginaActual,
      sort,
      sortDirection,
      filterValue
    }
    // envio el request y el servidor me responde con el resp
      this.http.post<Pagination>(`${this.baseUrl}${endPoint}`,request).subscribe(
      (resp) => {
        this.discoPagination = resp
        this.discosPaginationSubject.next(this.discoPagination)
      })

    // el espress operador lo que hace es mandar una copia del arreglo si este se modifica scara una copia y eso enviara, si no no enviara el areglo actualizado
    //libros existentes y los nuevos que vayan existiendo
    //return [...this.discos];
    // segun el retorna una copia de los discos
    //return this.discos.slice();
  }

  getPaginationActual(){
    return this.discosPaginationSubject.asObservable();
  }

  agregarDisco(disco: Disco) {
    
    // esto permite agregar elementos a una coleccion o arreglo
    //this.discos.push(disco)
    // esto me permite refrescar la lista sin neceidad de refrescar la pagina
    //el parametro podria ser disco yo creo que es la lista
    //this.discosSubjet.next(this.discos);
    let endPoint = 'disco'
    this.http.post(`${this.baseUrl}${endPoint}`,disco ).subscribe((resp)=>{
      this.discoSubject.next();
    })
  }

  agregarDiscoListener(){
    return this.discoSubject.asObservable();
  }

  eliminarDisco(disco: Disco){

    // los dos metodos sirven pero siempre con el next

      // this.discos = this.discos.filter(disco => disco !== discoNombre)
      //this.discosSubjet.next(this.discos);
    // const index = this.discos.findIndex(nombre => nombre )
    // this.discos.splice(index,1)
    // this.discosSubjet.next(this.discos);

  }


}

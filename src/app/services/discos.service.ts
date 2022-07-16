import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Disco } from '../pages/discos/interfaces/disco.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

 

  discosSubjet = new Subject();


  private discos: Disco[] = [
   {discoId: 1, titulo: 'Musageta', descripcion: 'rap', precio: 10 ,autor: 'juan perez' },
   {discoId: 2, titulo: 'Titan', descripcion: 'rap', precio: 32 ,autor: 'juan perez' },
   {discoId: 3, titulo: 'Apogeo', descripcion: 'rap', precio: 4 ,autor: 'juan perez'},
   {discoId: 4, titulo: 'the end', descripcion: 'rap', precio: 4 ,autor: 'juan perez' },
  ];

  constructor() { }

  obtenerDiscos() {
    // el espress operador lo que hace es mandar una copia del arreglo si este se modifica scara una copia y eso enviara, si no no enviara el areglo actualizado
    //libros existentes y los nuevos que vayan existiendo
    //return [...this.discos];
    // segun el retorna una copia
    return this.discos.slice();
  }

  agregarDisco(discoNombre: Disco) {
    // esto permite agregar elementos a una coleccion o arreglo
    this.discos.push(discoNombre)
    this.discosSubjet.next(this.discos);
  }

  eliminarDisco(discoNombre: string){

    // los dos metodos sirven pero siempre con el next

      // this.discos = this.discos.filter(disco => disco !== discoNombre)
      this.discosSubjet.next(this.discos);
    // const index = this.discos.findIndex(nombre => nombre )
    // this.discos.splice(index,1)
    // this.discosSubjet.next(this.discos);

  }


}

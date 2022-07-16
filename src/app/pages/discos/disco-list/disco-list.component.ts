import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { DiscosService } from '../../../services/discos.service';
import { Subscription } from 'rxjs';
import { Disco } from '../interfaces/disco.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
// on obervable nos avisa de cambios de comportamiento oe stado 

@Component({
  selector: 'app-disco-list',
  templateUrl: './disco-list.component.html',
  styleUrls: ['./disco-list.component.css']
})
export class DiscoListComponent implements OnInit, AfterViewInit{

  discos:Disco[] = [];

  // data de la tabla
  desplegarColumnas = ['titulo','descripcion','precio', 'autor']
  dataSource = new MatTableDataSource<Disco>()

  //discoSubscription!: Subscription

  //usamos esto para ordenar la tabla
  @ViewChild(MatSort) ordenamiento!: MatSort
  
  constructor(private discosService: DiscosService) {
 
   }

  //  estudiar es despues de iniciar el componente




  ngOnInit(): void {

    this.dataSource.data = this.discosService.obtenerDiscos()
    
    // cada vez que agrego un nuevo disco y este se agrega dentrop del arreglo
    // que esta en el servicio, el metodo agregar discos contiene un subject que envia la 
    // actualizacion del arreglo por lo cual puedo lograr verlo aca suscribiendome a ese observable subject
    // this.discos = this.discosService.obtenerDiscos()
    // this.discoSubscription = this.discosService.discosSubjet.subscribe((resp:any) => {
    //   this.discos = resp
      
    
    // })

    //this.discos = this.discosService.obtenerDiscos();
   
    
  }

  ngAfterViewInit(): void {

    this.dataSource.sort = this.ordenamiento
    
  }

  // guardarDisco(f: NgForm){
    
  //   // el objeto f tiene una propiadad llamada valid si es ngForm eso 
  //   // determina si tiene un valor por dentro o no
  //   if(f.valid){
  //     this.discosService.agregarDisco(f.value.nombreDisco)
  //   }
  // }

  

  // eliminarDisco(disco:any){

    
  //   // mi lista sera actualizada cuando le de click a un disco que sea igual a disco que este dentro de disco, 
  //   // this.discos = this.discos.filter( listaDeDiscos => listaDeDiscos !== disco)
  // }

  // ngOnDestroy(): void {
  //   this.discoSubscription!.unsubscribe()
  //   console.log('se desuscribio de la peticion subject');
   
   
   
  // }

}

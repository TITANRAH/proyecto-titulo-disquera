import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { DiscosService } from '../../../services/discos.service';
import { Subscription } from 'rxjs';
import { Disco } from '../interfaces/disco.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DiscoNuevoComponent } from '../components/disco-nuevo/disco-nuevo.component';
import { Pagination } from '../interfaces/pagination.interface';
// on obervable nos avisa de cambios de comportamiento oe stado 

@Component({
  selector: 'app-disco-list',
  templateUrl: './disco-list.component.html',
  styleUrls: ['./disco-list.component.css']
})
export class DiscoListComponent implements OnInit{


  discos:Disco[] = [];

  // data de la tabla
  desplegarColumnas = ['titulo','descripcion','precio', 'autor']
  dataSource = new MatTableDataSource<Disco>()

  //discoSubscription!: Subscription

  //usamos esto para ordenar la tabla
  @ViewChild(MatSort) ordenamiento!: MatSort
  @ViewChild(MatPaginator) paginacion!: MatPaginator
  private discoSubscription: Subscription = new Subscription()
  
  totalDiscos = 0;
  discosPorPagina = 2;
  paginaCombo = [1,2,5,10];
  paginaActual= 1;
  sort = 'titulo';
  sortDirection = 'asc';
  filterValue = null;


  constructor(private discosService: DiscosService,
              private dialog: MatDialog) {
 
   }

  //  estudiar es despues de iniciar el componente




  ngOnInit(): void {

    //primero ejecuto el componente libro
    this.discosService.obtenerDiscos(
                                      this.discosPorPagina,
                                      this.paginaActual,
                                      this.sort,
                                      this.sortDirection,
                                      this.filterValue);
    this.discosService.getPaginationActual().subscribe((pagination: Pagination)=>{

      this.dataSource = new MatTableDataSource<Disco>(pagination.data);
      this.totalDiscos = pagination.totalRows
    })


    // data source se igualo a la obtencion de discos dels ervicio

    // esto me mantiene actualizado el data source 
    // cada vez que entro al componente
    //this.dataSource.data = this.discosService.obtenerDiscos()
   // this.discoSubscription = this.discosService.discosSubjet.subscribe(()=>{
     //this.dataSource.data = this.discosService.obtenerDiscos()
    //});
    // cada vez que agrego un nuevo disco y este se agrega dentrop del arreglo
    // que esta en el servicio, el metodo agregar discos contiene un subject que envia la 
    // actualizacion del arreglo por lo cual puedo lograr verlo aca suscribiendome a ese observable subject
    // this.discos = this.discosService.obtenerDiscos()
    // this.discoSubscription = this.discosService.discosSubjet.subscribe((resp:any) => {
    //   this.discos = resp
      
    
    // })

    //this.discos = this.discosService.obtenerDiscos();
   
    
  }

  // el page event permite actulizar la data de la pagina actual 
  eventoPaginador(event: PageEvent){

    this.discosPorPagina = event.pageSize;
    // siempre comienza en cero por lo que le sumamos 1
    this.paginaActual = event.pageIndex + 1;
    this.discosService.obtenerDiscos(
                                      this.discosPorPagina,
                                      this.paginaActual,
                                      this.sort,
                                      this.sortDirection,
                                      this.filterValue
                                    );

  }

  //ngAfterViewInit(): void {

    // aqui llamamos a los viewchild y le decimos que despues de que se inicie el componente 
    // asigne esos valores

    // this.dataSource.sort = this.ordenamiento
    // this.dataSource.paginator = this.paginacion
  //}

  //hacerFiltro(filtro: string){
    // con esto filtramos la data
    // this.dataSource.filter = filtro
  //}

 openDialog(){
    //el parametro de open es un componente
   const dialogRef = this.dialog.open(DiscoNuevoComponent,{
     width: '35rem', 
    });

    dialogRef.afterClosed().subscribe(()=>{
      this.discosPorPagina,
      this.paginaActual,
      this.sort,
      this.sortDirection,
      this.filterValue
    })
 }

//

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


}

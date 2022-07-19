import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AutorService } from 'src/app/services/autor.service';
import { Autor } from '../../interfaces/autor.interface';
import { Subscription } from 'rxjs';
import { DialogRef } from '@angular/cdk/dialog';
import { AutorNuevoComponent } from '../../components/autor-nuevo/autor-nuevo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit, OnDestroy {

  //defino las columnas que iran en table 
  desplegarColumnas = ['nombre', 'seudonimo','estilo', 'nombreCompleto'] 

  // defino el nombre de la variable que contendra
  // la data de la table, la cual llenaremos con la obtencion de autores
  // desde el servicio, y esto lo realizo en ngonit
  dataSource = new MatTableDataSource<Autor>();

  autorSubscription = new Subscription();

  constructor(private autoresService: AutorService,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.autoresService.getAutores();
    this.autorSubscription = this.autoresService.getActualList().subscribe(
      (autores: Autor[]) => {
        this.dataSource.data = autores
      }
    )

  

    // lleno la data de la table con la obtencion de la respuesta del servicio
    //this.dataSource.data = this.autoresService.getAutores()
  }

  // destruyo la suscripcion
  ngOnDestroy(): void {
    console.log('se desuscribio de autores')
    this.autorSubscription.unsubscribe();
  }

  openDialog() {
    //el parametro de open es un componente
    const dialogRef = this.dialog.open(AutorNuevoComponent, {
      width: '35rem',
    });

    dialogRef.afterClosed().subscribe(() => {
      // this.discosPorPagina,
      this.autoresService.getAutores();
      this.autorSubscription = this.autoresService.getActualList().subscribe(
        (autores: Autor[]) => {
          this.dataSource.data = autores
        }
      )
        
    })
  }


}

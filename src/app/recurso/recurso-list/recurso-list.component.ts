import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../recurso.service';
import { recurso } from '../recurso';

@Component({
  selector: 'app-recurso-list',
  templateUrl: './recurso-list.component.html',
  styleUrls: ['./recurso-list.component.css']
})
export class RecursoListComponent implements OnInit {

  recursos: Array<recurso> = [];
  promedioCal: number = 0;
  numOpiniones: number = 0;

  selectedRecurso!: recurso;
  selected: Boolean = false;

  constructor(private recursoService: RecursoService) { }

  getRecursos(): void{
    this.recursoService.getRecursos().subscribe((recursos) => {
      this.recursos = recursos;

      if(this.recursos.length > 0){
        let suma: number = 0;
        let cantidad: number = 0;
        for(let recurso of this.recursos){
          suma += recurso.estrellas;
          this.numOpiniones += recurso.cantidadOpiniones;
          cantidad++;
        }
        this.promedioCal = suma/cantidad;
        this.promedioCal = Math.round(this.promedioCal * 100) / 100;
      }

    });

  }

  onSelected(recurso: recurso): void{
    this.selectedRecurso = recurso;
    this.selected = true;
  }



  ngOnInit() {
    this.getRecursos();
  }

}

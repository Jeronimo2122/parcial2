import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursoListComponent } from './recurso-list/recurso-list.component';
import { RecursoDetailComponent } from './recurso-detail/recurso-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RecursoListComponent],
  declarations: [RecursoListComponent, RecursoDetailComponent]
})
export class RecursoModule { }

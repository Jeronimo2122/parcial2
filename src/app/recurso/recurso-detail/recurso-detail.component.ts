import { Component, Input, OnInit } from '@angular/core';
import { recurso } from '../recurso';

@Component({
  selector: 'app-recurso-detail',
  templateUrl: './recurso-detail.component.html',
  styleUrls: ['./recurso-detail.component.css']
})
export class RecursoDetailComponent implements OnInit {

  @Input() recursoDetail!: recurso;

  constructor() { }

  ngOnInit() {
  }

}

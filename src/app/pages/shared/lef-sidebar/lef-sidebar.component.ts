import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lef-sidebar',
  templateUrl: './lef-sidebar.component.html',
  styles: []
})
export class LefSidebarComponent implements OnInit {

  nombre: string = localStorage.getItem('usuarioNombreCompleto');

  constructor() { }

  ngOnInit(): void {
  }

}

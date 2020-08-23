import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-menu-eba',
  templateUrl: './menu-eba.component.html',
  styles: [
  ]
})
export class MenuEbaComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

}

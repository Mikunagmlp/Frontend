import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styles: [
  ]
})
export class RecoverPasswordComponent implements OnInit {

  enterPassword: boolean = false;
  tokenPassword: any = '';

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  validarToken(token) {
    this.tokenPassword = token.value;
    // console.log(token.value);
    this.service.validPassToken(token.value).subscribe(resp => {
      console.log(resp);
      this.enterPassword = resp['value'];
    });
  }

  nuevoPassword(password, password2) {
    let p = password.value;
    let p2 = password2.value;

    console.log(p, p2);

    this.service.newPassword(p, this.tokenPassword).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/login')
    });
  }

}

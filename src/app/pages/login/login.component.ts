import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../../assets/css/pages/login-register-lock.css',
    '../../../assets/css/style.css',
    '../../../assets/css/colors/default-dark.css',
  ]
})
export class LoginComponent implements OnInit {

  usuario: UserModel = new UserModel();
  recover: boolean = false;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.invalid) { return; }

    this.service.login(this.usuario).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home');
    });
  }

  recoverPassword(email) {
    console.log(email.value);


    this.service.resetPassword(email.value).subscribe(resp => {
      this.router.navigateByUrl('/');
      console.log(resp);
    });


  }

}

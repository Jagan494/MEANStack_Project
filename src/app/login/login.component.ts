import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthserviceService } from 'app/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password: string;
  constructor(private router : Router,
              private authservice : AuthserviceService
    ) { 

    }

  ngOnInit(): void {
  }

   login(){
      this.authservice
      .login(this.email, this.password)
      .subscribe( s => this.router.navigate(['']));
      
   }
}

import { Component, OnDestroy } from '@angular/core';
import { User } from './user';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  user : User;
  usersubscription : Subscription;

  constructor(private authservice : AuthserviceService, private router : Router)
  {
      this.authservice.user.subscribe( user => 
          (this.user = user)
      );
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  
  logout(){
    this.authservice.logout();
    this.router.navigate(['/login'])
  }
}

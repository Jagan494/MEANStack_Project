import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { FormGroup } from "@angular/forms";
import { Interface } from 'readline';


export interface User{
  email: string;
  fullname: string;
  password: string
}
@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {
  private user$ = new Subject<User>();

  constructor() { }

  get user(){
    return this.user$.asObservable();
  }
  
  register(user: any) {
     return of({user});
  }

  
  
  
  login(email: string , password: string) {
     
    const logCred = {email, password};
    console.log("ASDFGHJKL");

    console.log("Logged in creds", logCred);
    return of({logCred});
  }

  
}

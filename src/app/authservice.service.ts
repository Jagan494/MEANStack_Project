import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {
  private user$ = new Subject<User>();

  constructor() { }

  get user(){
    return this.user$.asObservable();
  }
  
  register(user:any) {
     //make an api call to update the db for this user
     //update the user subject
    this.setuser(user);
    console.log("Registered succesfully!")
    return of({user});
  }

  logout() {
    //remove user from subject
    this.setuser(null);
    console.log("User logged out successfully")
  }

  login(email: string , password: string) {
    const logCred = {email, password};
    console.log("Logged in creds", logCred);
    return of({logCred});
  }
  
  private setuser(user)
  {
    this.user$.next(user);
  }
  
}

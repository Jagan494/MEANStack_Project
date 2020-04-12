import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  login(email: string , password: string) {
     
    const logCred = {email, password};
    console.log("ASDFGHJKL");
    
    console.log("Logged in creds", logCred);
    return of({logCred});
  }

  constructor() { }
}

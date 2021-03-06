import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {
  private user$ = new Subject<User>();
  //private apiUrl = '/api/auth/'
  constructor(private httpClient: HttpClient) { 

  }
 
  get user(){
    return this.user$.asObservable();
  }
  
  register(user:any) {
     //make an api call to update the db for this user
     //update the user subject
    return this.httpClient.post<User>('http://localhost:4050/api/auth/register/', user).pipe(switchMap(savedUser => {
      this.setuser(savedUser);
      return of(savedUser)
    }),
    catchError( e => {
        console.log(`server error occured`, e);
        return throwError(`Registration failed`);
    })
   );
  }

  logout() {
    //remove user from subject
    this.setuser(null);
    console.log("User logged out successfully")
  }

  login(email: string , password: string) {
    const logCred = {email, password};
    return this.httpClient.post<User>('http://localhost:4050/api/auth/login/', logCred).pipe(
      switchMap( fetchedUser => {
            this.setuser(fetchedUser);
            console.log('user found');
            return of(fetchedUser);
      }),
      catchError( e => {
        console.log('Server error occured ', e);
        return throwError('login failed');
      })
    )
  }
  
  private setuser(user)
  {
    this.user$.next(user);
  }
  
}

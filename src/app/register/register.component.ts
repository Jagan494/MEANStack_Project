import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'app/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userGroup = new FormGroup({
      fullname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required]),
      repeatpassword : new FormControl('', [Validators.required, this.passwordsMatch])
    }
  );

  constructor(private router: Router, private authservice: AuthserviceService) { }

  register(){
    if(!this.userGroup.valid){
      return;
    }
    const user = this.userGroup.getRawValue();
    this.authservice.register(user).subscribe(s => {
      this.router.navigate(['./'])
    })
  }
  passwordsMatch(control : FormControl){
    const password = control.root.get('password');
    return password && control.value !== password.value ? {
        passwordMatch : true
    } : null;
  }
  ngOnInit(): void {
  }

}

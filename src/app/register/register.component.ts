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
    }
  );

  constructor(private router: Router, private authservice: AuthserviceService) { }

  register(){
    const user = this.userGroup.getRawValue();
    this.authservice.register(user).subscribe(s => {
      this.router.navigate(['./login'])
    })
  }
  ngOnInit(): void {
  }

}

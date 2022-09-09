import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  u:User=new User();
  constructor(private us:UserService,private r:Router) { }

  ngOnInit(): void {
  }

  get username(){
    return this.loginForm.get('username');
    
  }
  SignUp(){
    this.u.username=this.loginForm.value.username;
    this.u.password=this.loginForm.value.password;
    this.us.validate(this.u)
//alert(JSON.stringify(this.loginForm.value))

    //  this.us.validate(this.u);
    //  if(this.us.isLogged==true){
    //    this.r.navigate(['add-visitor'])
    //  }
  }
  Close(){}
    loginForm:FormGroup=new FormGroup(
      {username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)}
    );
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm =this.fb.group(
    {
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',Validators.email]
    }
  )
  get password(){
    return this.registerForm.get('password');
    
  }
}

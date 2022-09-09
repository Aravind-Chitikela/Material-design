import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  isLogged:boolean=false;
  constructor() { }
  validate(u:User){
    if(u.username==="micron" && u.password==="pass123"){
      this.isLogged=true;
    }
  }
}

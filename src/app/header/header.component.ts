import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
u:User=new User();
//us:UserService=new UserService();
  constructor(public us:UserService) { 
    
  }
  ngOnInit(): void {
  
  }
  
}

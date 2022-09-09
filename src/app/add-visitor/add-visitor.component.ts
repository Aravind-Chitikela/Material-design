import { Component, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';
import { VisitorService } from '../services/visitor.service';


@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit{
  visitor:Visitor = new Visitor();
  constructor(private vs:VisitorService) {}
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.vs.addVisitor(this.visitor);
    this.visitor = new Visitor();
  }
}

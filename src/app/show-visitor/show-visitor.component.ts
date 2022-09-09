import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';
import { VisitorService } from '../services/visitor.service';
import { MatDialog } from '@angular/material/dialog';
import { EditVisitorComponent } from '../edit-visitor/edit-visitor.component';

@Component({
  selector: 'app-show-visitor',
  templateUrl: './show-visitor.component.html',
  styleUrls: ['./show-visitor.component.css']
})
export class ShowVisitorComponent implements OnInit {
  visitors:Array<Visitor> = [];

  isEdit:boolean=false;
  constructor(private vs:VisitorService, private dialog:MatDialog) { }
  ngOnInit(): void {
  //   this.vs.getVisitors().subscribe(
  //     ((data)=>{this.visitors=data;}),
  //     (error)=>{console.log("some error")})
  // }
  this.vs.getVisitors().subscribe(
    {
      next:(data)=>{this.visitors=data;},
      error:(error)=>{console.log("some error")}
    }
  )
  }
  editHandler(id:number){
    const dialog=this.dialog.open(EditVisitorComponent,{
      panelClass: 'detailZoom',
      data:{
        "name" : this.visitors[id].name,
        "id" :id+1,
        "company" :this.visitors[id].company,
        "contactperson" : this.visitors[id].contactPerson
      }
    });
  }

  deleteHandler(){
    alert("dary");
  }

}

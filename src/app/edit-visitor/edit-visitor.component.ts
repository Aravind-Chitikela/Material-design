import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { Visitor } from '../entities/visitor';
import { VisitorService } from '../services/visitor.service';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit {
visitor:Visitor=new Visitor();
  constructor(private vs:VisitorService,public dialogRef:MatDialogRef<EditVisitorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  closeDialog():void{
    this.dialogRef.close();
  }
  UpdateVisitor():void{
    this.vs.updateVisitor(this.visitor);
    this.visitor = new Visitor();
  }
}

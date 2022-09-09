import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { Visitor } from '../entities/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  url="http://localhost:3000/visitors"
  visitors:Array<Visitor> = [];
  subject:BehaviorSubject<Array<Visitor>>=new BehaviorSubject(this.visitors);

  constructor( private client:HttpClient) {
    this.client.get<Array<Visitor>>(this.url).subscribe(
        (data)=>{this.visitors=data;
          this.subject.next(this.visitors)
        },
        (error)=>{console.log("error"+ error)}
       
    );
  }

  addVisitor(v:Visitor){
    this.visitors.push(v)
    this.client.post(this.url,v).subscribe(
      success=>{
        this.visitors.push(v);
        this.subject.next(this.visitors)
        console.log('req proceesed succesfully');},
      error=>{console.log('urghhhhhhh! Try Again');}
    )
  }
  updateVisitor(v:Visitor){
    this.client.put(this.url,v).subscribe(
      success=>{
        this.visitors.push(v);
        this.subject.next(this.visitors)
        console.log('req proceesed succesfully');},
      error=>{console.log('urghhhhhhh! Try Again');}
    )
  }
  
  getVisitors():Observable<Array<Visitor>>{
    return this.subject;
   // return this.client.get<Array<Visitor>>(this.url);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  headElements = ['ID', 'Date', 'Product Total','Price Total',''];
  headElements2 = ['Product name','Price'];
  allbasget : Array<any> ;
  idmodel: string;
  productmodel:Array<any>;
  totalmodel:Number;
  date:Date;
  constructor(private Http:HttpClient) { }
  getproduct(){
    this.Http.get<any>('/getbasgetapi').subscribe(result=>{
    this.allbasget= result.data;
    }); 
  }
  addmodel(id,product,total,date){
    this.idmodel = id;
    this.productmodel = product;
    this.totalmodel = total;
    this.date = date;
  }; 
  ngOnInit(): void {
    this.getproduct();
  }

}

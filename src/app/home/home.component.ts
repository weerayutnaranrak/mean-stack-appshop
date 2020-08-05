import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  basget:Array<any>;
  totalprice:number;  
  allproducts:Array<any>; 
  basgetdata:Array<any>; 
  date:Date = new Date();             
  constructor(private Http:HttpClient) {
    
  }

  getproduct(){
    this.Http.get<any>('getproductapi').subscribe(result=>{
    this.allproducts= result.data;
    });
  }

  addbusget=(price,name,text)=>{
    var data = {"name":name,"price":price,"text":text}
    this.totalprice+=price;
    this.basget.push({"name":name,"price":price,"text":text});
  }
  cutbasget=(price,index)=>{
    this.totalprice -= price;
    this.basget.splice(index, 1)
  }
  
  resetbasget(){
    this.basget = [];
    this.totalprice = 0;
  }
  savebasget(){
    this.basgetdata = [{date:this.date,product:this.basget,total:this.totalprice}]
    this.Http.post<any>("addbasgetapi",this.basgetdata).subscribe(result=>{
    alert(JSON.stringify(result));
    })
    this.resetbasget();
  }
  ngOnInit(): void {
    this.totalprice = 0;
    this.basget=[];
    this.getproduct();
  }
}

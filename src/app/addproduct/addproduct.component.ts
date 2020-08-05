import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  
  constructor(private Http:HttpClient) { }

  ngOnInit(): void {
    
  }
  saveProduct(productdata){
    this.Http.post<any>("addproductapi",productdata).subscribe(result=>{
    alert(JSON.stringify(result))
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  customerid:any;
  constructor(private fs:FoodService,private r:Router) { }
  showform=true;
  s="";
  c=localStorage.getItem("id");
  orders:any=null;
  ngOnInit(): void {
    
  }
  order(){
    let body={customer:{
      customer_id:this.c
    }}

    this.fs.postorder(body).subscribe(
      (res: any)=>{
       this.getOrders();
      }
    )
    this.s="Ordered Successfully!!";
    this.clearform();
  
  }
  clearform() {
   this.c=null;
  }
  submitForm(form:NgForm){
    if(form.valid){
      this.order();
    }
}
yourOrders(){
  this.showform=!this.showform;
  this.getOrders();
}
toCart(){
  this.r.navigate(["/cart"]);
}
getOrders(){
  this.fs.fetchOrders(this.c).subscribe(
    (data: any)=>{
      this.orders=data;
      this.fs.orders=data;
    }
   )
}
viewItems(id:any){
  this.r.navigate(["/orderitems",id]);
}
cancelOrder(id: any){
  this.fs.deleteOrder(id).subscribe((res)=>{this.getOrders()})
}
}

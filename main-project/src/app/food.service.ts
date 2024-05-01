import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private customer:Customer | undefined;

  setCustomer(customerid: any,emailId: any,pwd: any){
    this.customer={
      id: customerid,
      email: emailId,
      password : pwd
    }
  }
  getCustomer(){
    return this.customer;
  }

  UserExist(Credentials: any) {
    return this.http.post("http://localhost:8080/dining/customer/login",Credentials);
  }
  postCustomer(body: {  name: any; password: any; email: any; address: any; phone_no: any; }) {
    return this.http.post("http://localhost:8080/dining/customer/add",body);
  }

  orders: any=[];
  fetchOrderItems(id:any) {
    return this.http.get("http://localhost:8080/api/orderitemsbyorderid/"+id);
  }
  deleteOrder(id: any) {
    return this.http.delete("http://localhost:8080/dining/order/delete/"+id);
  }
  fetchOrders(id:any) {
    return this.http.get("http://localhost:8080/dining/order/getbyuserid/"+id);
  }
  deleteCartFood(id: any) {
    return this.http.delete("http://localhost:8080/dining/cart/delete/"+id);
  }
 

  constructor(private http:HttpClient) { }

  fetchCart() {
    return this.http.get("http://localhost:8080/dining/cart/getall");
  }
  fetchCartById(id:any) {
    return this.http.get("http://localhost:8080/dining/cart/getuserbyid/"+id);
  }

  
  postorder(body: { customer: { customer_id: any; }; }) {
    return this.http.post("http://localhost:8080/dining/order/add",body);
  }
 
  postContact(body:any) {
    return this.http.post("http://localhost:8080/dining/contact/add",body);
  }

  url="http://localhost:8080/dining/food/getall";
  fetchFoods(){
   return this.http.get(this.url);
  }
  deleteFood(food_id: string){
    return this.http.delete("http://localhost:8080/dining/food/delete/"+food_id);
   }

   postFood(body: any){
    return this.http.post("http://localhost:8080/dining/food/add",body);
   }
   postCart(body: any){
    return this.http.post("http://localhost:8080/dining/cart/add",body);
   }
   putCart(body: any){
    return this.http.post("http://localhost:8080/dining/cart/add",body);
   }
   putFood(body: any){
    return this.http.put("http://localhost:8080/dining/food/update",body);
   }
}





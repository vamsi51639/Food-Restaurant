import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { AuthService } from '../auth.service';
import { Customer } from '../models/Customer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  c :string = "";
  customerId: any;
  customerEmail: string | undefined;
  password: string | undefined;
  constructor(private ath:AuthService,private fs:FoodService,private r:Router){}

  ngOnInit(): void {
  }
  submitForm(form:NgForm){
      console.log(form);
  }

  // check(form:NgForm){
  //   if(form.valid && this.customerEmail==="admin@gmail.com" && this.password==="admin@123"){
  //     localStorage.setItem("role","admin");
  //     this.r.navigate(["/admin"]);
  //   }
  //   else{
  //     this.login();
  //   }
  // }

  check1(form:NgForm){
    if(form.valid)
    return true;
  else{
  return false;
  }
  }

  login() {
    if(this.customerEmail==="admin@gmail.com" && this.password==="admin@123"){
      localStorage.setItem("role","admin");
      this.r.navigate(["/admin"]);
    }
    this.fs.UserExist({"email": this.customerEmail,"password": this.password}).subscribe(
      (data: any) => {
        this.customerId = data.customer_id;
        localStorage.setItem("id",data.customer_id);
        localStorage.setItem("role","user");
        this.r.navigate(["/home"]);
      },
      (err) => {
        console.log("error in login");
        alert("Ivalid Credentials");
      }
    )
  }
  logOut(){
    this.r.navigate(['/login']);
    localStorage.removeItem('role');

    if(localStorage.getItem('id')){
      localStorage.removeItem('id');
    }
    this.r.navigate(['/login']);
  }
}



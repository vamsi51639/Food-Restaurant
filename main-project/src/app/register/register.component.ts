import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';

interface customer{
  name:any,
  phone_no:any,
  address:any,
  email:any,
  password:any
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fs:FoodService,private r:Router) { }

  ngOnInit(): void {
  }
  name:any;
  phone_no:any;
  address:any;
  email:any;
  password:any;
  
 registerUser(){
  let body={
    name:this.name,
    phone_no:this.phone_no,
    address:this.address,
    email:this.email,
    password:this.password
  }
  this.fs.postCustomer(body).subscribe((res)=>{
    this.r.navigate(["/login"]);
  })
 
 }
 
}

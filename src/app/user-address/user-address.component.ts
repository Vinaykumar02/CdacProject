import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myform:NgForm){
    console.log("submitted");
  }
}

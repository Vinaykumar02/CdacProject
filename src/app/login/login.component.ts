import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/service/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private login:AdminService) {
    
   }

  ngOnInit(): void {
  }
  onSubmit(myform:NgForm)
  {
    this.login.getLoginCredential();
    console.log("form submited")
  }
}

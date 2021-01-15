import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
credential=[{
  username : "Ajay",
  password : 123
}
]
  constructor() { }

  getLoginCredential(){
    return this.credential;
  }
}




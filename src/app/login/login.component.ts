import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

data="Your Perfect Banking Partner"

inputplaceholder="Account Number"

acno=''   // acno:any  

psw=''

userDetails:any={
  1000:{acno:1000,username:"anu",password:"abc123",balance:0},
  1001:{acno:1001,username:"amal",password:"abc123",balance:0},
  1002:{acno:1002,username:"arun",password:"abc123",balance:0},
  1003:{acno:1003,username:"akil",password:"abc123",balance:0},
}

constructor() { }

ngOnInit(): void {
  
}

login(){
  alert('login clicked')
}

acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
}

pswrdChange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
 

constructor(private router:Router,private ds:DataService) { }

ngOnInit(): void {
  
}

 login(){
   var acnum=this.acno
   var psw=this.psw
  const result=this.ds.login(acnum,psw)
  if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  } 
  else{
  alert("incorrect acno or password")
}
}

// login(a:any,b:any){
// // console.log(a.value);
// 
//    var acnum=a.value
//    var psw=b.value
//    var userDetails=this.userDetails
//    if(acnum in userDetails){
//    if(psw==userDetails[acnum]["password"]){
//    alert("Login success")
//  }
//  else{
//    alert("Incorrect password")
//  }
//    }
//    else{
//      alert("Acno incorrect or Not registered yrt")
//    }
//      alert('login clicked')
// }
// 

//acnoChange(event:any){
//  this.acno=event.target.value
//  // console.log(this.acno);
//}

//pswrdChange(event:any){
//  this.psw=event.target.value
//  // console.log(this.psw);
//  
//}

}

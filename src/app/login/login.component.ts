import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

  username : string ='abc'
  password : string =''

  invalidLogin = false
  errorMsg = 'Invalid credentials !!'

  constructor(private router : Router, private authentication:AuthenticationService) {

  }

  handleLogin() {
    //if(this.username === 'abc' && this.password==='abc') {
      
    if(this.authentication.authenticate(this.username,this.password)) {  
      
     // console.log("After login" +this.isUserLoggedIn)
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
    } else {
      this.invalidLogin=true
    }
    console.log(this.username)
  }


 
ngOnInit(): void {
  
}

}

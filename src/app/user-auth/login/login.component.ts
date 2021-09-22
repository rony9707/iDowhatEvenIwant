import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userdataService: UserdataService
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    console.warn('hello')

    var popup = document.getElementById('popup');
    popup?.classList.toggle('active')

    var blur = document.getElementById('blur');
    blur?.classList.toggle('active');
  }

  // Login Form Code
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,
              Validators.pattern('[a-zA-Z0-9]+$')]),
    password: new FormControl('', [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(16),
              Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.].{8,16}')])
  })

  


  //Fetch Login Form Data and Code for User Route so it shows like "user/Rony"
  validateForm(username: string) {
    //Getusername
    let usernameToSend: any = this.loginForm.value.username //GetUserName
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.userdataService.setUsername(usernameToSend)
      this.router.navigate(['/user/', username])
    }

  }

  //Get username function for valid check
  get userName(){
    return this.loginForm.get('username');
  }

  //Get password function for valid check
  get password(){
    return this.loginForm.get('password');
  }

  // Forgot Password Form Code
  forgotPasswordForm = new FormGroup({
    email: new FormControl('')
  })

  collectDataForgotPassword() {
    console.warn(this.forgotPasswordForm.value)
  }



}

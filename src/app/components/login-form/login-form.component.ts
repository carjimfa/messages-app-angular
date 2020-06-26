import { Component, OnInit } from '@angular/core';
import { LoginRequestDto } from 'src/app/models/login-request-dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private usersService:UsersService) { 
    this.initLoginForm();
  }

  ngOnInit(): void {
    this.tryLogInWithSavedCredentials();
  }

  private tryLogInWithSavedCredentials() {
    let username = localStorage.getItem("username");
    if (username) {
      this.loginForm.controls["username"].setValue(username);
      this.onSubmit();
    }
  }

  get user(){
    return this.usersService.user;
  }

  private initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  onSubmit(){
    this.usersService.login(this.loginForm.controls["username"].value);    
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginRequestDto } from 'src/app/models/login-request-dto';
import { PostMessageRequestDto } from 'src/app/models/post-message-request-dto';
import { Message } from 'src/app/models/message';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  messageForm: FormGroup;
  user:User;
  

  constructor(private apiClient:ApiService,
    private formBuilder:FormBuilder,
    private webSocketService:WebSocketService,
    private messagesService:MessagesService) { 
      this.loginForm=new FormGroup({});
      this.messageForm=new FormGroup({});
    }

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      username:['', Validators.required]
    });

    this.messageForm=this.formBuilder.group({
      content:['', Validators.required]
    });

    this.webSocketService.startSocket();

    let username=localStorage.getItem("username");
    if(username){
      this.loginForm.controls["username"].setValue(username);
      this.onSubmit();
    }
  }

  get messages(){
    return this.sortMessages(this.messagesService.messages);
  }

  trackById(index, item:Message){
    return item.Id; 
  }

  sortMessages(countries:Message[]):Message[]{
    return countries.sort(function(a, b){
      if(a.CreationDate<b.CreationDate){
        return 1;
      }
      return -1;
    })
  }

  onSubmit(){
    let requestDto=new LoginRequestDto({
      username:this.loginForm.controls["username"].value
    })
    this.apiClient.login(requestDto).subscribe((user)=>{
      localStorage.setItem("username", user.Username);
      this.user=user;
      
    },
    (error)=>{
      throw new Error(error);
    })
  }

  postMessage(){
    let requestDto=new PostMessageRequestDto({
      content:this.messageForm.controls["content"].value,
      userId:this.user.Id
    })
    this.webSocketService.sendNewMessage(requestDto);
    this.messageForm.controls["content"].setValue("");
  }

}

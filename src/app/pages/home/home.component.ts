import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginRequestDto } from 'src/app/models/login-request-dto';
import { PostMessageRequestDto } from 'src/app/models/post-message-request-dto';
import { Message } from 'src/app/models/message';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { MessagesService } from 'src/app/services/messages.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(private webSocketService:WebSocketService,
    private messagesService:MessagesService,
    private usersService:UsersService) 
    { 
      
    }

  ngOnInit(): void {
    this.webSocketService.startSocket();
  }

  get user(){
    return this.usersService.user;
  }

  

  

}

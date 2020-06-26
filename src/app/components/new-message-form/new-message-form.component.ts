import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { PostMessageRequestDto } from 'src/app/models/post-message-request-dto';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit {

  messageForm: FormGroup;

  constructor(private apiClient:ApiService,
    private formBuilder:FormBuilder,
    private webSocketService:WebSocketService,
    private usersService:UsersService) { 
      this.messageForm=this.formBuilder.group({
        content:['', Validators.required]
      });
    }

  ngOnInit(): void {
    
  }

  get user(){
    return this.usersService.user;
  }

  postMessage(){
    let requestDto=new PostMessageRequestDto({
      content:this.messageForm.controls["content"].value,
      userId:this.user.id
    })
    this.webSocketService.sendNewMessage(requestDto);
    this.messageForm.controls["content"].setValue("");
  }

}

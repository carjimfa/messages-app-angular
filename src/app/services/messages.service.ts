import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  _messages:Array<Message>=new Array<Message>();

  constructor(webSocketService:WebSocketService) { 
    webSocketService.allMessagesUpdates().subscribe((messages)=>{
      if(messages.length>0){
        this.setMessages(messages);
      }
    });

    webSocketService.newMessageUpdates().subscribe((message)=>{
      if(message.Content && message.User){
        this.messageReceived(message);
      }
    });
  }

  setMessages(messages:Array<Message>){
    this._messages=messages;
  }

  get messages(){
    return this._messages;
  }

  messageReceived(message:Message){
    this._messages.push(message);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message';
import { SocketMessageResponseDto } from '../models/socket-message-response-dto';
import { MessageType } from "../models/MessageType";
import { PostMessageRequestDto } from '../models/post-message-request-dto';
import { SocketMessageRequestDto } from '../models/socket-message-request-dto';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: WebSocket;
  newMessageSubject: BehaviorSubject<Message> = new BehaviorSubject<Message>(new Message());
  allMessagesSubject: BehaviorSubject<Array<Message>> = new BehaviorSubject<Array<Message>>(new Array<Message>());
  userInfoReceivedSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userJoinedSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private name: string;
  constructor() { }
 
  startSocket() {
    this.socket = new WebSocket('wss://localhost:5001/ws');
    this.socket.addEventListener("open", (ev => {
      console.log('opened')
    }));
    this.socket.addEventListener("message", (ev => {
      var socketMessageResponse: SocketMessageResponseDto = JSON.parse(ev.data);
      console.log('message object', socketMessageResponse);
      switch (socketMessageResponse.type) {
        case MessageType.AllMessages:
          this.allMessagesSubject.next(socketMessageResponse.content);
          break;
        case MessageType.NewMessage:
          this.newMessageSubject.next(socketMessageResponse.content);
          break;
        case MessageType.SocketUserInfo:
          this.userInfoReceivedSubject.next(socketMessageResponse.content);
          break;
        case MessageType.UserConnected:
          this.userJoinedSubject.next(socketMessageResponse.content);
          break;
        default:
          break;
      }
    }));
  }

  sendNewMessage(dto: PostMessageRequestDto) {
    let request=new SocketMessageRequestDto({
      type:1,
      content:dto
    });
    var requestAsJson = JSON.stringify(request);
    this.socket.send(requestAsJson);
  }

  newMessageUpdates():Observable<Message>{
    return this.newMessageSubject.asObservable();
  }

  allMessagesUpdates():Observable<Message[]>{
    return this.allMessagesSubject.asObservable();
  }

  userInfoUpdates():Observable<string>{
    return this.userInfoReceivedSubject.asObservable();
  }

  userJoinedUpdates():Observable<string>{
    return this.userJoinedSubject.asObservable();
  }
}

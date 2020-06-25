import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  private _user:User=null;
  private _userSocketId:string;

  constructor(webSocketService:WebSocketService) {
    webSocketService.userInfoUpdates().subscribe((res)=>{
      this.setSocketUserId(res);
    });
   }

  private setUser(newUser:User){
    this._user=newUser;
  }

  private setSocketUserId(socketId:string){
    this._userSocketId=socketId;
  }

  get user(){
    return this._user;
  }

}

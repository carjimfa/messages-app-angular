import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { WebSocketService } from './web-socket.service';
import { ApiService } from './api.service';
import { LoginRequestDto } from '../models/login-request-dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private _user: User = null;
  private _userSocketId: string;

  constructor(private webSocketService: WebSocketService,
    private apiService: ApiService) {
    webSocketService.userInfoUpdates().subscribe((res) => {
      this.setSocketUserId(res);
    });
  }

  private setUser(newUser: User) {
    this._user = newUser;
  }

  private setSocketUserId(socketId: string) {
    this._userSocketId = socketId;
  }

  get user() {
    return this._user;
  }

  login(username: string) {

    let requestDto = new LoginRequestDto({
      username: username
    });

    this.apiService.login(requestDto).subscribe((user) => {
      localStorage.setItem("username", user.username);
      this.setUser(user);
    },
      (error) => {
        throw new Error(error);
      });
  }

}

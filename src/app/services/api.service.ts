import { Injectable } from '@angular/core';
import { IApiService } from './iapi-service';
import { LoginRequestDto } from '../models/login-request-dto';
import { User } from '../models/user';
import { PostMessageRequestDto } from '../models/post-message-request-dto';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService{
  
  baseUrl:string=environment.apiUrl;

  constructor(private httpClient:HttpClient) {

  }

  login(dto: LoginRequestDto): Observable<User> {
    let result=new Observable<User>((observer)=>{
      const body = JSON.stringify(dto);

      const url_= this.baseUrl+"/api/Users/login";
      
      let options_ : any = {
        body: body,
        observe: "response",
        responseType: "json",			
        headers: new HttpHeaders({
            "Content-Type": "application/json-patch+json", 
            "Accept": "application/json"
        })
      };

      this.httpClient.request("POST", url_, options_).subscribe(
      (loginRes)=>{
        if(loginRes instanceof HttpResponse){
          observer.next(User.fromJS(loginRes.body));
          observer.complete();
        }

      },
      (error)=>{
        throw new Error("Error thrown when Login user "+error);
      });
    });
    return result;
  }

  getUsers(): Observable<User[]> {
    let result=new Observable<User[]>((observer)=>{
      const url_= this.baseUrl+"/api/Users";
      this.httpClient.get(url_).subscribe(
      (users:User[])=>{
        observer.next(users);
        observer.complete();
      },
      (error)=>{
        throw new Error("Error thrown when getting users "+error);
      });
    });
    return result;
  }
  
  postNewMessage(dto: PostMessageRequestDto): Observable<Message> {
    let result=new Observable<Message>((observer)=>{
      const body = JSON.stringify(dto);

      const url_= this.baseUrl+"/api/Messages";
      
      let options_ : any = {
        body: body,
        observe: "response",
        responseType: "json",			
        headers: new HttpHeaders({
            "Content-Type": "application/json-patch+json", 
            "Accept": "application/json"
        })
      };

      this.httpClient.request("POST", url_, options_).subscribe(
      (message)=>{
        if(message instanceof HttpResponse){
          observer.next(Message.fromJS(message));
          observer.complete();  
        }
      },
      (error)=>{
        throw new Error("Error thrown when Login user "+error);
      });
    });
    return result;
  }


  getMessages(): Observable<Message[]> {
    let result=new Observable<Message[]>((observer)=>{

      const url_= this.baseUrl+"/api/Messages";
      
      let options_ : any = {
        observe: "response",
        responseType: "json",			
        headers: new HttpHeaders({
            "Content-Type": "application/json-patch+json", 
            "Accept": "application/json"
        })
      };

      this.httpClient.request("GET", url_, options_).subscribe(
      (messages)=>{
        let messagesResult=new Array<Message>();
        if(messages instanceof HttpResponse){
          if(messages.body instanceof Array){
            messages.body.forEach(m=>{
              let msg=Message.fromJS(m);
              messagesResult.push(msg);
            })
          }
        }
        observer.next(messagesResult);
        observer.complete();
      },
      (error)=>{
        throw new Error("Error thrown when Login user "+error);
        observer.complete();
      });
    });
    return result;
  }



}

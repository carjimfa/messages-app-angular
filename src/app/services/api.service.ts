import { Injectable } from '@angular/core';
import { LoginRequestDto } from '../models/login-request-dto';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  
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

}

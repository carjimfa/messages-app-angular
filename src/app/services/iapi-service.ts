import { LoginRequestDto } from '../models/login-request-dto';
import { User } from '../models/user';
import { PostMessageRequestDto } from '../models/post-message-request-dto';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

export interface IApiService {
    login(dto:LoginRequestDto):Observable<User>;
    getUsers():Observable<User[]>;
    postNewMessage(dto:PostMessageRequestDto):Observable<Message>;
    getMessages():Observable<Message[]>;
}

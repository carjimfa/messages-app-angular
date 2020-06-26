import { LoginRequestDto } from '../models/login-request-dto';
import { User } from '../models/user';
import { Observable } from 'rxjs';

export interface IApiService {
    login(dto:LoginRequestDto):Observable<User>;
}

import { ILoginRequestDto } from './ILoginRequestDto';

export class LoginRequestDto implements ILoginRequestDto{
    username:string;
    
    constructor(values: ILoginRequestDto) {
        Object.assign(this, values);
    }
}



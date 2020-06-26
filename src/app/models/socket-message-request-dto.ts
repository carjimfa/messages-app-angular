import { ISocketMessageRequestDto } from './ISocketMessageRequestDto';

export class SocketMessageRequestDto {
    type:number;
    content:any;

    constructor(values?: ISocketMessageRequestDto) {
        Object.assign(this, values);
    }
}


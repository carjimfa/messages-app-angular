export class SocketMessageRequestDto {
    type:number;
    content:any;

    constructor(values?: ISocketMessageRequestDto) {
        Object.assign(this, values);
    }
}

export interface ISocketMessageRequestDto{
    type:number;
    content:any;
}
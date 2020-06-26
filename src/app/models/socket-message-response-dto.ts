export class SocketMessageResponseDto {
    type:MessageType;
    content:any;
}

export enum MessageType
{
    UserConnected=0,
    NewMessage=1,
    AllMessages=2,
    SocketUserInfo=3
}

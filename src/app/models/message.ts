import { BaseEntity } from './base-entity';
import { User } from './user';

export class Message implements IMessage {
    id: string;
    creationDate: Date;
    modificationDate: Date;
    isDeleted: boolean;
    content:string;
    userId:string;
    user:User;

    constructor(values?: IMessage) {
        Object.assign(this, values);
    }

    init(_data:any){
        if(_data){
            this.id=_data["id"];
            this.creationDate=_data["creationDate"];
            this.modificationDate=_data["modificationDate"];
            this.isDeleted=_data["isDeleted"];
            this.userId=_data["userId"];
            this.user=_data["user"];
            this.content=_data["content"];
        }
    }

    static fromJS(data: any): Message {
        data = typeof data === 'object' ? data : {};
        let result = new Message();
        result.init(data);
        return result;
    }
}

export interface IMessage extends BaseEntity{
    content:string;
    userId:string;
    user:User;
}
import { BaseEntity } from './base-entity';
import { User } from './user';

export class Message implements IMessage {
    Id: string;
    CreationDate: Date;
    ModificationDate: Date;
    IsDeleted: boolean;
    Content:string;
    UserId:string;
    User:User;

    constructor(values?: IMessage) {
        Object.assign(this, values);
    }

    init(_data:any){
        if(_data){
            this.Id=_data["Id"]?_data["Id"]:_data["Id"];
            this.CreationDate=_data["CreationDate"]?_data["CreationDate"]:_data["CreationDate"];
            this.ModificationDate=_data["ModificationDate"]?_data["ModificationDate"]:_data["ModificationDate"];
            this.IsDeleted=_data["IsDeleted"]?_data["IsDeleted"]:_data["IsDeleted"];
            this.UserId=_data["UserId"]?_data["UserId"]:_data["UserId"];
            this.User=_data["User"]?_data["User"]:_data["User"];
            this.Content=_data["Content"]?_data["Content"]:_data["Content"];
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
    Content:string;
    UserId:string;
    User:User;
}
import { Message } from './message';
import { BaseEntity } from './base-entity';
import { HttpResponse } from '@angular/common/http';

export class User implements IUser {
    Id: string;
    CreationDate: Date;
    ModificationDate: Date;
    IsDeleted: boolean;
    Username: string;
    Messages: Message[];

    constructor(values?: IUser) {
        Object.assign(this, values);
    }

    init(_data:any){
        if(_data){
            this.Id=_data["Id"]?_data["Id"]:_data["id"];
            this.CreationDate=_data["CreationDate"]?_data["CreationDate"]:_data["creationDate"];
            this.ModificationDate=_data["ModificationDate"]?_data["ModificationDate"]:_data["modificationDate"];
            this.IsDeleted=_data["IsDeleted"]?_data["IsDeleted"]:_data["isDeleted"];
            this.Username=_data["Username"]?_data["Username"]:_data["username"];
            this.Messages=_data["Messages"]?_data["Messages"]:_data["messages"];
        }
    }

    static fromJS(data: any): User {
        data = typeof data === 'object' ? data : {};
        let result = new User();
        result.init(data);
        return result;
    }
}

export interface IUser extends BaseEntity {
    Username: string;
    Messages: Message[];
}

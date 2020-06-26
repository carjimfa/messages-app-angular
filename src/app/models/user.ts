import { Message } from './message';
import { BaseEntity } from './base-entity';

export class User implements IUser {
    id: string;
    creationDate: Date;
    modificationDate: Date;
    isDeleted: boolean;
    username: string;
    messages: Message[];

    constructor(values?: IUser) {
        Object.assign(this, values);
    }

    init(_data:any){
        if(_data){
            this.id=_data["id"];
            this.creationDate=_data["creationDate"];
            this.modificationDate=_data["modificationDate"];
            this.isDeleted=_data["isDeleted"];
            this.username=_data["username"];
            this.messages=_data["messages"];
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
    username: string;
    messages: Message[];
}

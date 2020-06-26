import { Message } from './message';
import { BaseEntity } from './base-entity';

export interface IUser extends BaseEntity {
    username: string;
    messages: Message[];
}

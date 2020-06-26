import { BaseEntity } from './base-entity';
import { User } from './user';

export interface IMessage extends BaseEntity {
    content: string;
    userId: string;
    user: User;
}

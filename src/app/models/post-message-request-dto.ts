import { IPostMessageRequestDto } from './IPostMessageRequestDto';

export class PostMessageRequestDto implements IPostMessageRequestDto{
    content:string;
    userId:string;

    constructor(values: IPostMessageRequestDto) {
        Object.assign(this, values);
    }
}



import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { UsersService } from 'src/app/services/users.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-messages-feed',
  templateUrl: './messages-feed.component.html',
  styleUrls: ['./messages-feed.component.scss']
})
export class MessagesFeedComponent implements OnInit {

  constructor(private messagesService:MessagesService,
    private usersService:UsersService) { }

  ngOnInit(): void {
  }

  get messages(){
    return this.sortMessages(this.messagesService.messages);
  }

  get user(){
    return this.usersService.user;
  }

  trackById(index, item:Message){
    return item.id; 
  }

  sortMessages(countries:Message[]):Message[]{
    return countries.sort(function(a, b){
      if(a.creationDate<b.creationDate){
        return 1;
      }
      return -1;
    })
  }
}

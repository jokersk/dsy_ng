import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Chat } from '../models/chats/Chat.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatList$:Observable<Chat[]>;
  
  messages : Chat = {
    name :"",
    content :""
  };

  constructor(private chatSer : ChatService) {
    this.chatList$ = this.chatSer.getChatList()
      .snapshotChanges()
      .map(
        change => {
          return change.map(c=>({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      );
  }

  ngOnInit() {
    
  }

  addMessages(){
    this.chatSer.addMessage(this.messages).then(ref=>{
      console.log(ref.key)
    });
  }

}

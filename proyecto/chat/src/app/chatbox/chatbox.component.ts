import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
 // messages =["Hola como estas?","bien y tu?"]
  messages = [{
    "text":"Hola como estas?",
    "self":false
  },{
    "text":"bien y tu?",
    "self":true
  }]
  replyMessage = "";
  constructor() { }

  ngOnInit() {
  }
    reply(){
      this.messages.push({
        "text":this.replyMessage,
        "self":true
      })
      this.replyMessage = "";
    }

}

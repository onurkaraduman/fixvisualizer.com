import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FixMessage, FixMessageParserService } from 'src/app/service/fix-message-parser/fix-message-parser.service';
import { DataDictionary } from 'src/app/service/fix-message-parser/data-dictionary';

@Component({
  selector: 'app-fix-message-container',
  templateUrl: './fix-message-container.component.html',
  styleUrls: ['./fix-message-container.component.sass']
})
export class FixMessageContainerComponent implements OnInit {

  fixMessages: FixMessage[];

  @Input()
  fixMessagesString: string;

  @Input()
  dataDictionary: DataDictionary;

  @Input()
  ready: boolean;

  constructor(private fixMessageParser: FixMessageParserService) { }

  ngOnInit() {
  }

  selectMessgeStyleClass(fixMessage: FixMessage) {
    if (fixMessage.direction === "OUTGOING") {
      return "outgoingMessage";
    }
    else {
      return "incomingMessage";
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fixMessagesString != undefined) {
      console.log("Fix messages have been updated");
      this.parseMessage()
    }
    else if (changes.ready != undefined) {
      this.parseMessage();
    }
  }


  parseMessage() {
    this.fixMessages = this.fixMessageParser.parse(this.dataDictionary, this.fixMessagesString);
  }
}

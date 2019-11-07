import { Component, OnInit, Input } from '@angular/core';
import { DataDictionary } from 'src/app/service/fix-message-parser/data-dictionary';
import { FixMessage, FixField } from 'src/app/service/fix-message-parser/fix-message-parser.service';

@Component({
  selector: 'app-fix-message-accordion',
  templateUrl: './fix-message-accordion.component.html',
  styleUrls: ['./fix-message-accordion.component.sass']
})
export class FixMessageAccordionComponent implements OnInit {

  headerMessageTags: number[] = [8, 9, 35, 49, 56, 115, 128, 90, 91, 34, 50, 142, 57, 143, 116, 144, 129, 145, 43, 97, 52, 122, 212, 213, 347, 369, 627, 628, 629, 630];
  trailerMessageTags: number[] = [93, 89, 10];
  tagSenderCompId: number = 49;
  tagTargetCompId: number = 56;


  @Input()
  fixMessage: FixMessage;

  constructor() { }

  ngOnInit() {
  }

  selectRowStyleClass(fixField: FixField) {
    if (fixField.tag in this.headerMessageTags) {
      return "fixMessageHeader";
    }
    else if (fixField.tag in this.trailerMessageTags) {
      return "fixMessageTrailer";
    }
  }

  selectMessageHeaderStyleClass() {
    if (this.fixMessage.direction === "OUTGOING") {
      return "outgoingHeaderLogDirection";
    }
    else if (this.fixMessage.direction === "INCOMING") {
      return "incomingHeaderLogDirection";
    }
  }

  getSessionInfo() {
    let fixFieldSenderCompId = this.fixMessage.fixFields.filter(f => f.tag == this.tagSenderCompId)[0];
    let fixFieldTargetCompId = this.fixMessage.fixFields.filter(f => f.tag == this.tagTargetCompId)[0];
    return fixFieldSenderCompId.value + " -> " + fixFieldTargetCompId.value;
  }

  getMessageName() {
    let messageType = this.fixMessage.fixFields.filter(f => f.tag == 35)[0];
    return messageType.valueName;
  }

  getMessageTagValue() {
    let messageType = this.fixMessage.fixFields.filter(f => f.tag == 35)[0];
    return messageType.tag + "=" + messageType.value;
  }
}

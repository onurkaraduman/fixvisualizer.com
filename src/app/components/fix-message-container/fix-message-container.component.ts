import { Component, OnInit, Input, SimpleChanges, QueryList, ViewChildren } from '@angular/core';
import { FixMessage, FixMessageParserService } from 'src/app/service/fix-message-parser/fix-message-parser.service';
import { DataDictionary } from 'src/app/service/fix-message-parser/data-dictionary';
import { MatAccordion } from '@angular/material/expansion';
import { FixMessageAccordionComponent } from '../fix-message-accordion/fix-message-accordion.component';

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


  @ViewChildren(FixMessageAccordionComponent) accordions !: QueryList<FixMessageAccordionComponent>;

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
  }

  parseMessage() {
    this.fixMessages = this.fixMessageParser.parse(this.dataDictionary, this.fixMessagesString);
  }

  onClickCopyAll() {
    let rawMessageList = [];
    for (let fixMessage of this.fixMessages) {
      rawMessageList.push(fixMessage.messageString);
    }
    this.copytoClipboard(rawMessageList.join("\n"));
  }


  onClickCollapseAll() {
    this.accordions.forEach(a => {
      a.collapse();
    })
  }

  onClickExpandAll() {
    this.accordions.forEach(a => {
      a.expand();
    })
  }

  copytoClipboard(text: string) {
    let textarea = document.createElement("textarea");
    textarea.style.height = "0px";
    textarea.style.left = "-100px";
    textarea.style.opacity = "0";
    textarea.style.position = "fixed";
    textarea.style.top = "-100px";
    textarea.style.width = "0px";
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    document.execCommand("copy");
  }
}

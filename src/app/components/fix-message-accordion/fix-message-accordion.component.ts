import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { DataDictionary } from 'src/app/service/fix-message-parser/data-dictionary';
import { FixMessage, FixField } from 'src/app/service/fix-message-parser/fix-message-parser.service';
import { MatAccordion } from '@angular/material/expansion';

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

  onixBaseUrl: string = "https://www.onixs.biz/fix-dictionary";
  onixRelativeUrlTpl: string = "/{fixVersion}/tagNum_{tag}.html";

  @Input()
  fixMessage: FixMessage;

  @ViewChildren(MatAccordion) accordions !: QueryList<MatAccordion>;

  constructor() { }

  ngOnInit() {
  }

  onRowClick(fixField: FixField) {
    let defaultFixVersion = this.getOnixFixVersion(null);
    let relativePath = this.onixRelativeUrlTpl.replace("{fixVersion}", defaultFixVersion).replace("{tag}", String(fixField.tag));
    let fullPath = this.onixBaseUrl + relativePath;
    window.open(fullPath, "_blank");
  }


  getOnixFixVersion(fixVersion: string) {
    if (fixVersion === "FIX.4.2") {
      return "4.2";
    }
    else if (fixVersion === "FIX.4.4") {
      return "4.4";
    }
    else {
      return "4.4";
    }
  }

  collapse() {
    this.accordions.forEach(a => {
      a.closeAll();
    })
  }

  expand() {
    this.accordions.forEach(a => {
      a.openAll();
    })
  }

  onClickRowCopy(rawMessage: string) {
    this.copytoClipboard(rawMessage);
  }

  selectRowStyleClass(fixField: FixField) {
    if (this.headerMessageTags.includes(fixField.tag)) {
      return "fixMessageHeader";
    }
    else if (this.trailerMessageTags.includes(fixField.tag)) {
      return "fixMessageTrailer";
    }
    else{
      return "fixMessageBusiness"
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

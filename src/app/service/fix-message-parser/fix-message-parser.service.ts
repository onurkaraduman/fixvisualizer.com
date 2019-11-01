import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FixMessageParserService {

  FIX_TAG_BODY_LENTH: number = 9;
  KEY_VALUE_DELIMETER: string = "=";

  constructor() { }

  parser(messages: string) {
    let messagesSplit = messages.split("\n");
    for (let message of messagesSplit) {

    }
  }


  private getDelimeter(rawMessage: string) {
    let withEqual = this.FIX_TAG_BODY_LENTH + this.KEY_VALUE_DELIMETER;
    let endIndex = rawMessage.indexOf(withEqual);
    let ch = rawMessage.substring(endIndex - 1, endIndex);
    if (ch == "A") {
      let ch2 = rawMessage.substring(endIndex - 2, endIndex - 1);
      if (ch2 == "^")
        return ch2 + ch;
    } else {
      return rawMessage.substring(endIndex - 1, endIndex);
    }
  }
}


export interface FixMessage {
  direction: string;
  fixFields: FixField[];
}

export interface FixField {
  tag: number;
  name: string;
  value: string;
  valueName: string;
  required: string;
}
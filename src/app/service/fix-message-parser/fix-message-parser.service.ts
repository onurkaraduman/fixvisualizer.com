import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataDictionary, FixVersion } from './data-dictionary';

@Injectable({
  providedIn: 'root'
})
export class FixMessageParserService {

  FIX_TAG_BODY_LENTH: number = 9;
  KEY_VALUE_DELIMETER: string = "=";

  constructor(private httpclient: HttpClient) {

  }

  parse(dataDictionary: DataDictionary, messages: string): FixMessage[] {
    if (!this.isValid(messages)) {
      return null;
    }
    if (dataDictionary == null) {
      dataDictionary = this.getDefaultDictionary();
    }
    let fixMessages: FixMessage[] = [];
    let messagesSplit = messages.split("\n");
    for (let message of messagesSplit) {
      let delimeter = this.getDelimeter(message);
      let fixFields = this.getFixFields(message, delimeter, dataDictionary);
      let direction = this.findDirection(message);
      let fixMessage: FixMessage = {
        direction: direction,
        fixFields: fixFields,
        messageString: message
      }
      fixMessages.push(fixMessage);
    }
    return fixMessages;
  }

  private findDirection(rawMessage: string) {
    if (rawMessage.includes("incom")) {
      return "INCOMING";
    }
    else if (rawMessage.includes("outgo")) {
      return "OUTGOING";
    }
  }

  private isValid(messages: string): boolean {
    if (messages != undefined && messages != null && messages.includes(this.KEY_VALUE_DELIMETER)) {
      return true;
    }
    return false;
  }

  private getDefaultDictionary() {
    return new DataDictionary(FixVersion.fix44, this.httpclient);
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

  private getFixFields(rawMessage: string, delimter: string, dataDictionary: DataDictionary): FixField[] {
    let beginningIndex = rawMessage.indexOf("8=");
    rawMessage = rawMessage.substring(beginningIndex);
    let fixFieldsTagValue = rawMessage.split(delimter);
    let fixFields: FixField[] = [];
    for (const fixFieldTagValue of fixFieldsTagValue) {
      let keyValue = fixFieldTagValue.split(this.KEY_VALUE_DELIMETER);
      let tag = Number(keyValue[0]);
      let value = keyValue[1];
      let fieldName = dataDictionary.getFieldName(tag);
      let fixField: FixField = {
        tag: tag,
        value: value,
        name: fieldName,
        required: false,
        valueName: "testValue"
      }
      fixFields.push(fixField);
    }
    return fixFields;
  }
}


export interface FixMessage {
  direction: string;
  fixFields: FixField[];
  messageString: string;
}

export interface FixField {
  tag: number;
  name: string;
  value: string;
  valueName: string;
  required: boolean;
}

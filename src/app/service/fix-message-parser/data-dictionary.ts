import { Parser } from "xml2js";
import { HttpClient } from '@angular/common/http';
import { FixField } from './fix-message-parser.service';

export class DataDictionary {

    fields: Field[];
    dictionaryLoaded: boolean;

    constructor(public fixversion: FixVersion, public httpclient: HttpClient) {

    }

    public async init() {
        let dictonaryXml = await this.getDictionaryXml();
        console.log(dictonaryXml);
        this.parse(dictonaryXml);
        this.dictionaryLoaded = true;
    }

    urlBaseFixDictionary: string = "assets/fix/dictionary/";

    public getFieldName(tag: number) {
        if (this.fields != null) {
            let filtered = this.fields.filter(f => f.tag == tag);
            if (filtered != null) {
                if (filtered[0] != null) {
                    return filtered[0].name;
                }
            }
        }
    }

    public getValueName(tag: number, value: string) {
        if (this.fields != null) {
            let filtered = this.fields.filter(f => f.tag == tag);
            if (filtered != null) {
                if (filtered[0] != null) {
                    if (filtered[0].values.length > 0) {
                        let filteredValue = filtered[0].values.filter(f => f.key == value);
                        if (filteredValue != null && filteredValue.length > 0) {
                            return filteredValue[0].value;
                        }
                    }
                }
            }
        }
    }

    private async getDictionaryXml() {
        let fullpath = this.getFullPathOfDictionary();
        let result = await this.httpclient.get(fullpath, { responseType: 'text' }).toPromise();
        return result;
    }

    private parse(dictionaryXml: string) {
        let parser = new Parser();
        parser.parseString(dictionaryXml, (err, result) => {
            this.fields = this.parseFields(result.fix.fields);
        });
    }

    private parseFields(fields: any) {
        let returnResult: Field[] = [];
        let fixFields = fields[0].field;

        for (const fixField of fixFields) {
            let keyValues = [];
            if (fixField.hasOwnProperty("value")) {
                keyValues = this.parseValues(fixField.value);
            }

            returnResult.push({
                name: fixField.$.name,
                tag: fixField.$.number,
                type: fixField.$.type,
                values: keyValues
            });
        }
        return returnResult;
    }

    private parseValues(values: any) {
        let keyValues = [];
        for (const value of values) {
            let keyValue: KeyValue = {
                key: value.$.enum,
                value: value.$.description
            }
            keyValues.push(keyValue);
        }
        return keyValues;
    }

    private getFullPathOfDictionary() {
        return this.urlBaseFixDictionary + FixVersion[this.fixversion] + ".xml";
    }
}

export interface Field {
    type: string;
    tag: number;
    name: string;
    values: KeyValue[];
}

export interface KeyValue {
    key: string;
    value: string;
}

export enum FixVersion {
    fix42, fix44
}



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

    public getFieldName(tag: number): string {
        if (this.fields != undefined && this.fields != null) {
            let filtered = this.fields.filter(f => f.tag === tag);
            if (filtered != null) {

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
            returnResult.push({
                name: fixField.name,
                tag: fixField.number,
                type: fixField.type,
                values: null
            });
        }
        return returnResult;
    }

    private getFullPathOfDictionary() {
        return this.urlBaseFixDictionary + FixVersion[this.fixversion] + ".xml";
    }
}

export interface Field {
    type: string;
    tag: number;
    name: string;
    values: Record<string, string>;
}

export enum FixVersion {
    fix42, fix44
}



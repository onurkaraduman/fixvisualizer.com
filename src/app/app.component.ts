import { Component } from '@angular/core';
import { DataDictionary, FixVersion } from './service/fix-message-parser/data-dictionary';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fixed-angular';

  fixMessageString: string = "outgoing: 8=FIX.4.2|9=130|35=AE|49=LSEHub|56=LSETR|115=BROKERX|34=2287|43=N|52=20120330-12:14:09|370=20120330-12:14:09.816|571=00008661533TRLO1-1-1-0|150=H|10=074|";

  dataDictionary: DataDictionary;
  defaultFixVersion: FixVersion = FixVersion.fix44;
  ready: boolean;

  constructor(private httpclient: HttpClient) {
    this.init();
  }

  async init() {
    this.dataDictionary = new DataDictionary(this.defaultFixVersion, this.httpclient);
    await this.dataDictionary.init();
    this.ready = true;
  }
}

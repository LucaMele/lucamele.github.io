import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Title {

  constructor(public http: Http) {

  }

  getData() {
    console.log('Title#getData(): Get Data');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return {
      h1: 'Homepage of Luca Mele',
      h4: '<FRONT>end Developer</FRONT>'
    };
  }

}

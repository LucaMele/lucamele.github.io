import { Component } from '@angular/core';

import { Title } from './title';

import { AppState } from '../../app.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'app-header',
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ <string>require('./header.style.scss') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './header.template.html'
})
export class Header {
  // Set our default values
  localState = { value: '' };
  data = {};
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {
  }

  ngOnInit() {
    this.data = this.title.getData();
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}

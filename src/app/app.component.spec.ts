/**
 * File: app.component.spec.ts
 * Project: LiveCoding/Etna/basic web server
 * File Created: Sunday, 26th November 2017 10:40:12 pm
 * Author: Aurélien Castellarnau (castellarnau.a@gmail.com)
 * -----
 * Last Modified: Sunday, 26th November 2017 11:18:28 pm
 * Modified By: Aurélien Castellarnau (castellarnau.a@gmail.com>)
 * -----
 * Copyright © 2018 - 2017 WebFace, WebFace
 */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

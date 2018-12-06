import { Component, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'hotjar',
  template: `<div #script id="hotjar-script" style.display="none">
              <ng-content></ng-content>
            </div>`
})
export class HotjarComponent implements AfterViewInit {

  script: HTMLElement;
  version: string;
  trackingId: string;

  constructor() {
    this.version = '6';
  }

  ngAfterViewInit() {
    this.script = document.getElementById('hotjar');
    this.version = this.script.getAttribute('version');
    this.trackingId = this.script.getAttribute('tracking-id');

    if (!this.trackingId) {
      this.trackingId = environment.hotjar_id;
    }

    if (this.trackingId) {
          if (!window['_hjSettings']) {
            window['_hjSettings'] = {
              hjid: 675240,
              hjsv: 6
            };
          }
          this.convertToScript();
      }
  }

  convertToScript() {
    const element = this.script;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//static.hotjar.com/c/hotjar-${this.trackingId}.js?sv=${this.version}`;

    return (element.appendChild(script)) ? true : false;
  }
}

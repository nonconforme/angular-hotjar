import { Injectable } from '@angular/core';

@Injectable()
export class HotjarService {

  ctorParameters = () => [];

  constructor() {}

  /**
   * @return {?}
   */
  getInstance() {
    return window['hj'] = window['hj'] || this.getHotjarQueue();
  }

  /**
   * @param {?} eventName
   * @return {?}
   */
  trigger(eventName) {
      this.getInstance()('trigger', eventName);
  }

  /**
   * @return {?}
   */
  getHotjarQueue() {
      return function () {
          console.log('..:: HOTJAR EVENT PUSHED IN QUEUE ::..', arguments);
          (window['hj']['q'] = window['hj']['q'] || []).push(arguments);
      };
  }
}

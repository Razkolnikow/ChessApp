import {
  CheckListener
} from './CheckListener.js';

import {
  CheckMateListener
} from './CheckMateListener.js';

import jquery from 'jquery';

export class CheckKingWrapper {
  constructor() {
    this._checkListener = new CheckListener();
    this._checkMateListener = new CheckMateListener();
  }

  listen(field) {
    if (this._checkListener.listen(field)) {
      // TODO
      showInfo('Check!')
      function showInfo(msg) {
        $('#infoBox').text(msg).show();
        setTimeout(function() {
          $('#infoBox').fadeOut(500);
        }, 3000);
      }
    } else if (this._checkMateListener.listen(field)) {
      // TODO
    }

    // TODO
  }
}

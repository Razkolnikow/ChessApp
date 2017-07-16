import {
  CheckListener
} from './CheckListener.js';

import {
  CheckMateListener
} from './CheckMateListener.js';

import jquery from 'jquery';

import {
  InfoWriter
} from './InfoWriter.js';

export class CheckKingWrapper {
  constructor(cache) {
    this._checkListener = new CheckListener();
    this._checkMateListener = new CheckMateListener();
    this._infoWriter = new InfoWriter();
    this._cache = cache;
  }

  listen(field) {
    if (this._checkListener.listen(field)) {
      this._infoWriter.write('Check!')
      // TODO
      this._cache.setCheckedKing(field);
      if (this._cache.blackKingCheck) // TODO
    } else if (this._checkMateListener.listen(field)) {
      this._infoWriter.write('Checkmate!');
      // TODO
    }

    // TODO
  }

  getEnemyColor(className) {
    let color = className.substr(0, className.indexOf('-'));
    if (color === 'white') {
      return 'black';
    } else {
      return 'white'
    }
  }

  getCurrentColor(className) {
    return className.substr(0, className.indexOf('-'));
  }
}

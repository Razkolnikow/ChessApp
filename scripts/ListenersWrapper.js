import {
  CheckListener
} from './CheckListener.js';

import {
  CheckMateListener
} from './CheckMateListener.js';

export class checkKingWrapper {
  constructor() {
    this._checkListener = new CheckListener();
    this._checkMateListener = new CheckMateListener();
  }

  listen(field) {
    if (this._checkListener.listen(field)) {
      // TODO
    } else if (this._checkMateListener.listen(field)) {
      // TODO
    }

    // TODO
  }
}

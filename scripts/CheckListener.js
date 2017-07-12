import {
  KingAttackScanner
} from './KingAttackScan.js';

import {
  letters
} from './Constants.js'

export class CheckListener {
  constructor() {
    this._scanner = new KingAttackScanner();
  }

  listen(field) { 
    let fieldIndex = letters.indexOf(field.id[0]);
    let fieldNumber = Number(field.id[1]);
    let kingColor = this._scanner.getColor(field);

    if (this._scanner.isAttackedFromRock(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._scanner.isAttackedFromPawn(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._scanner.isAttackedFromBishop(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._scanner.isAttackedFromKing(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._scanner.isAttackedFromKnight(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._scanner.isAttackedFromQueen(fieldIndex, fieldNumber, kingColor)) {
      return true;
    }

    return false;
  }
}

import {
  KingAttackScanner
} from './KingAttackScan.js';

import {
  letters
} from './Constants.js';

export class ReinforcmentsScanner {
  constructor () {
    this._attackScanner = new KingAttackScanner();
  }

  scanEnemy(field, enemy) {
    let fieldIndex = letters.indexOf(enemy.id[0]);
    let fieldNumber = Number(enemy.id[1]);
    let kingColor = this._attackScanner.getColor(field);

    if (this._attackScanner.isAttackedFromRock(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromPawn(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromBishop(fieldIndex, fieldNumber, kingColor)) {
      return true;
    }  else if (this._attackScanner.isAttackedFromKing(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromKnight(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromQueen(fieldIndex, fieldNumber, kingColor)) {
      return true;
    }

    return false;
  }

  scanSelf(field, enemy) {
    // TODO should check this method
    let fieldIndex = letters.indexOf(enemy.id[0]);
    let fieldNumber = Number(enemy.id[1]);
    let kingColor = this._attackScanner.getColor(enemy);

    if (this._attackScanner.isAttackedFromRock(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromPawn(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromBishop(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromKnight(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this._attackScanner.isAttackedFromQueen(fieldIndex, fieldNumber, kingColor)) {
      return true;
    }

    return false;
  }
}

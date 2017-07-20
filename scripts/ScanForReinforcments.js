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
    let reinforcmentPieces = [];
    let rockRe = this._attackScanner.isAttackedFromRock(fieldIndex, fieldNumber, kingColor);
    let pawnRe = this._attackScanner.isAttackedFromPawn(fieldIndex, fieldNumber, kingColor);
    let bishopRe = this._attackScanner.isAttackedFromBishop(fieldIndex, fieldNumber, kingColor);
    let knightRe = this._attackScanner.isAttackedFromKnight(fieldIndex, fieldNumber, kingColor);
    let QueeRe = this._attackScanner.isAttackedFromQueen(fieldIndex, fieldNumber, kingColor);
    if (rockRe) {
      reinforcmentPieces.push(rockRe);
    } else if (pawnRe) {
      reinforcmentPieces.push(pawnRe);
    } else if (bishopRe) {
      reinforcmentPieces.push(bishopRe);
    } else if (knightRe) {
      reinforcmentPieces.push(knightRe);
    } else if (QueeRe) {
      reinforcmentPieces.push(QueeRe);
    }

    if (reinforcmentPieces.length > 0) return reinforcmentPieces;

    return false;
  }
}

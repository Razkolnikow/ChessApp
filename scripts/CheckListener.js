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

    let rock = this._scanner.isAttackedFromRock(fieldIndex, fieldNumber, kingColor);
    let pawn = this._scanner.isAttackedFromPawn(fieldIndex, fieldNumber, kingColor);
    let bishop = this._scanner.isAttackedFromBishop(fieldIndex, fieldNumber, kingColor);
    let king = this._scanner.isAttackedFromKing(fieldIndex, fieldNumber, kingColor);
    let knight = this._scanner.isAttackedFromKnight(fieldIndex, fieldNumber, kingColor);
    let queen = this._scanner.isAttackedFromQueen(fieldIndex, fieldNumber, kingColor);
    if (rock) {
      return rock;
    } else if (pawn) {
      return pawn;
    } else if (bishop) {
      return bishop;
    } else if (king) {
      return king;
    } else if (knight) {
      return knight;
    } else if (queen) {
      return queen;
    }

    return false;
  }
}

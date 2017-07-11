import {
  KingAttackScanner
} from './KingAttackScan.js';

export class CheckListener {
  constructor() {
    this._scanner = new KingAttackScanner();
  }

  listen(field) {
    let fieldIndex = letters.indexOf(field.id[0]);
    let fieldNumber = Number(field.id[1]);
    let kingColor = this_scanner.getColor(field);

    if (this_scanner.isAttackedFromRock(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this_scanner.isAttackedFromPawn(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this_scanner.isAttackedFromBishop(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this_scanner.isAttackedFromKing(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this_scanner.isAttackedFromKnight(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this_scanner.isAttackedFromQueen(fieldIndex, fieldNumber, kingColor)) {
      return true;
    }

    return false;
  }
}

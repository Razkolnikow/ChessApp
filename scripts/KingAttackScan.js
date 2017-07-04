import {
  letters
} from './Constants.js';

export class KingAttackScanner {
  constructor () {

  }

  getColor(el) {
    return el.className.substr(0, el.className.indexOf('-'));
  }

  isAttackedField(field, king) {
    let fieldIndex = letters.indexOf(field.id[0]);
    let fieldNumber = Number(field.id[1]);
    let kingColor = this.getColor(king);

    if (this.isAttackedFromRock(fieldIndex, fieldNumber, kingColor)) {
      return true;
    }

    return false;
  }

  isAttackedFromRock(fIndex, fNumber, kColor) {
    for (let i = fNumber + 1; i < 9; i++) {
      let nextField = document.getElementById(letters[fIndex] + i);
      if (nextField.className.length > 0 && nextField.className.indexOf('rock') >= 0) {
        let pieceColor = this.getColor(nextField);
        if (kColor !== pieceColor) {
          return true;
        }
      } else if (nextField.className.length > 0) {
        break;
      }
    }

    for (let i = fNumber - 1; i > 0; i--) {
      let nextField = document.getElementById(letters[fIndex] + i);
      if (nextField.className.length > 0 && nextField.className.indexOf('rock') >= 0) {
        let pieceColor = this.getColor(nextField);
        if (kColor !== pieceColor) {
          return true;
        }
      } else if (nextField.className.length > 0) {
        break;
      }
    }

    for (let i = fIndex + 1; i < letters.length; i++) {
      let nextField = document.getElementById(letters[i] + fNumber);
      if (nextField.className.length > 0 && nextField.className.indexOf('rock') >= 0) {
        let pieceColor = this.getColor(nextField);
        if (kColor !== pieceColor) {
          return true;
        }
      } else if (nextField.className.length > 0) {
        break;
      }
    }

    for (let i = fIndex - 1; i >= 0; i--) {
      let nextField = document.getElementById(letters[i] + fNumber);
      if (nextField.className.length > 0 && nextField.className.indexOf('rock') >= 0) {
        let pieceColor = this.getColor(nextField);
        if (kColor !== pieceColor) {
          return true;
        }
      } else if (nextField.className.length > 0) {
        break;
      }
    }

    return false;
  }

  isAttackedFromPawn(fIndex, fNumber, kColor) {

    return false;
  }

  isAttackedFromKnight(fIndex, fNumber, kColor) {

    return false;
  }

  isAttackedFromBishop(fIndex, fNumber, kColor) {

    return false;
  }

  isAttackedFromKing(fIndex, fNumber, kColor) {

    return false;
  }

  isAttackedFromQueen(fIndex, fNumber, kColor) {

  }
}

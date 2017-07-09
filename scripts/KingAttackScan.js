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
    } else if (this.isAttackedFromPawn(fieldIndex, fieldNumber, kingColor)) {
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
    let enemyColor = kColor === 'white' ? 'black' : 'white';
    if (enemyColor === 'white') {
      let rightPawnIndex = fIndex + 1;
      let rightPawnNumber = fNumber - 1;
      let leftPawnIndex = fIndex - 1;
      let leftPawnNumber = fNumber - 1;

      let leftWhitePawn = document.getElementById(letters[leftPawnIndex] + leftPawnNumber);
      let rightWhitePawn = document.getElementById(letters[rightPawnIndex] + rightPawnNumber);
      if (leftWhitePawn) {
        if (leftWhitePawn.className.startsWith('white-pawn')) {
          return true;
        }
      }

      if (rightWhitePawn) {
        if (rightWhitePawn.className.startsWith('white-pawn')) {
          return true;
        }
      }
    } else {
        let rightPawnIndex = fIndex + 1;
        let rightPawnNumber = fNumber + 1;
        let leftPawnIndex = fIndex - 1;
        let leftPawnNumber = fNumber + 1;

        let leftBlackPawn = document.getElementById(letters[leftPawnIndex] + leftPawnNumber);
        let rightBlackPawn = document.getElementById(letters[rightPawnIndex] + rightPawnNumber);

        if (leftBlackPawn && leftBlackPawn.className.startsWith('black-pawn')) {
            return true;
          }

        if (rightBlackPawn && rightBlackPawn.className.startsWith('black-pawn')) {
          return true;
        }
      }

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

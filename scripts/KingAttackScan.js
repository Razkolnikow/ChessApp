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
    } else if (this.isAttackedFromBishop(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this.isAttackedFromKing(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this.isAttackedFromKnight(fieldIndex, fieldNumber, kingColor)) {
      return true;
    } else if (this.isAttackedFromQueen(fieldIndex, fieldNumber, kingColor)) {
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
    let enemyColor = kColor === 'white' ? 'black' : 'white';
    let firstKnight = document.getElementById(letters[fIndex + 1] + (fNumber - 2));
    let secondKnight = document.getElementById(letters[fIndex - 1] + (fNumber - 2));
    let thirthKnight = document.getElementById(letters[fIndex + 1] + (fNumber + 2));
    let fourthKnight = document.getElementById(letters[fIndex - 1] + (fNumber + 2));
    let fifthKnight = document.getElementById(letters[fIndex  - 2] + (fNumber - 1));
    let sixthKnight = document.getElementById(letters[fIndex - 2] + (fNumber + 1));
    let seventhKnight = document.getElementById(letters[fIndex + 2] + (fNumber - 1));
    let eightKnight = document.getElementById(letters[fIndex - 2] + (fNumber + 1));

    let enemyClassName = enemyColor + '-knight';

    if(firstKnight && firstKnight.className.startsWith(enemyClassName)) return true;
    if(secondKnight && secondKnight.className.startsWith(enemyClassName)) return true;
    if(thirthKnight && thirthKnight.className.startsWith(enemyClassName)) return true;
    if(fourthKnight && fourthKnight.className.startsWith(enemyClassName)) return true;
    if(fifthKnight && fifthKnight.className.startsWith(enemyClassName)) return true;
    if(sixthKnight && sixthKnight.className.startsWith(enemyClassName)) return true;
    if(seventhKnight && seventhKnight.className.startsWith(enemyClassName)) return true;
    if(eightKnight && eightKnight.className.startsWith(enemyClassName)) return true;

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

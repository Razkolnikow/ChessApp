import {
  letters
} from './Constants.js';

export class KingAttackScanner {
  constructor () {

  }

  getColor(el) {
    return el.className.substr(0, el.className.indexOf('-'));
  }

  isAttackedField(fieldAttacked, king) {
    let fieldIndex = letters.indexOf(fieldAttacked.id[0]);
    let fieldNumber = Number(fieldAttacked.id[1]);
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
      let nextField1 = document.getElementById(letters[fIndex] + i);
      if (nextField1.className.length > 0
        && (nextField1.className.indexOf('rock') >= 0
        || nextField1.className.indexOf('queen') >= 0)) {
        let pieceColor = this.getColor(nextField1);
        if (kColor !== pieceColor) {
          return nextField1;
        }
      } else if (nextField1.className.length > 0) {
        break;
      }
    }

    for (let i = fNumber - 1; i > 0; i--) {
      let nextField2 = document.getElementById(letters[fIndex] + i);
      if (nextField2.className.length > 0
        && (nextField2.className.indexOf('rock') >= 0
        || nextField2.className.indexOf('queen') >= 0)) {
        let pieceColor = this.getColor(nextField2);
        if (kColor !== pieceColor) {
          return nextField2;
        }
      } else if (nextField2.className.length > 0) {
        break;
      }
    }

    for (let i = fIndex + 1; i < letters.length; i++) {
      let nextField3 = document.getElementById(letters[i] + fNumber);
      if (nextField3.className.length > 0
        && (nextField3.className.indexOf('rock') >= 0
        || nextField3.className.indexOf('queen') >= 0)) {
        let pieceColor = this.getColor(nextField3);
        if (kColor !== pieceColor) {
          return nextField3;
        }
      } else if (nextField3.className.length > 0) {
        break;
      }
    }

    for (let i = fIndex - 1; i >= 0; i--) {
      let nextField4 = document.getElementById(letters[i] + fNumber);
      if (nextField4.className.length > 0
        && (nextField4.className.indexOf('rock') >= 0
        || nextField4.className.indexOf('queen') >= 0)) {
        let pieceColor = this.getColor(nextField4);
        if (kColor !== pieceColor) {
          return nextField4;
        }
      } else if (nextField4.className.length > 0) {
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
          return leftWhitePawn;
        }
      }

      if (rightWhitePawn) {
        if (rightWhitePawn.className.startsWith('white-pawn')) {
          return rightWhitePawn;
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
            return leftBlackPawn;
          }

        if (rightBlackPawn && rightBlackPawn.className.startsWith('black-pawn')) {
          return rightBlackPawn;
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

    if (firstKnight && firstKnight.className.startsWith(enemyClassName)) return firstKnight;
    if (secondKnight && secondKnight.className.startsWith(enemyClassName)) return secondKnight;
    if (thirthKnight && thirthKnight.className.startsWith(enemyClassName)) return thirthKnight;
    if (fourthKnight && fourthKnight.className.startsWith(enemyClassName)) return fourthKnight;
    if (fifthKnight && fifthKnight.className.startsWith(enemyClassName)) return fifthKnight;
    if (sixthKnight && sixthKnight.className.startsWith(enemyClassName)) return sixthKnight;
    if (seventhKnight && seventhKnight.className.startsWith(enemyClassName)) return seventhKnight;
    if (eightKnight && eightKnight.className.startsWith(enemyClassName)) return eightKnight;

    return false;
  }

  isAttackedFromBishop(fIndex, fNumber, kColor, isQueen) {
    let enemyColor = kColor === 'white' ? 'black' : 'white';
    let enemyClassName = enemyColor + '-bishop';
    if (isQueen) enemyClassName = enemyColor + '-queen';
    let leftIndex = fIndex - 1;
    let rightIndex = fIndex + 1;
    let downNum = fNumber - 1;
    let upNum = fNumber + 1;

    // Check LeftUp Diagonal
    let up = upNum;
    for (let i = leftIndex; i >= 0; i--) {
      if (up > 8) break;
      let fieldUp = document.getElementById(letters[i] + up);
      if (fieldUp.className.startsWith(enemyClassName)) return fieldUp;
      if (fieldUp && fieldUp.className.indexOf('-') > 0) break;
      up++;
    }

    up = upNum;
    let down = downNum;
    // Check LeftDown Diagonal
    for (let i = leftIndex; i >= 0; i--) {
      if (down < 1) break;
      let field = document.getElementById(letters[i] + down);
      if (field && field.className.startsWith(enemyClassName)) return field;
      if (field && field.className.indexOf('-') > 0) break;
      down--;
    }

    down = downNum;
    // Check RightUp Diagonal
    for (let i = rightIndex; i < 8; i++) {
      if (up > 8) break;
      let fieldR = document.getElementById(letters[i] + up);
      if (fieldR && fieldR.className.startsWith(enemyClassName)) return fieldR;
      if (fieldR && fieldR.className.indexOf('-') > 0) break;
      up++;
    }

    // Check RightDown Diagonal
    for (let i = rightIndex; i < 8; i++) {
      if (down < 1) break;
      let fieldS = document.getElementById(letters[i] + down);
      if (fieldS && fieldS.className.startsWith(enemyClassName)) return fieldS;
      if (fieldS && fieldS.className.indexOf('-') > 0) break;
      down--;
    }

    return false;
  }

  isAttackedFromKing(fIndex, fNumber, kColor) {
    let enemyColor = kColor === 'white' ? 'black' : 'white';
    let left = document.getElementById(letters[fIndex - 1] + fNumber);
    let right = document.getElementById(letters[fIndex + 1] + fNumber);
    let up = document.getElementById(letters[fIndex] + (fNumber + 1));
    let down = document.getElementById(letters[fIndex] + (fNumber - 1));
    let leftUp = document.getElementById(letters[fIndex - 1] + (fNumber + 1));
    let rightUp = document.getElementById(letters[fIndex + 1] + (fNumber + 1));
    let leftDown = document.getElementById(letters[fIndex - 1] + (fNumber - 1));
    let rightDown = document.getElementById(letters[fIndex + 1] + (fNumber - 1));

    let enemyClassName = enemyColor + '-king';

    if (left && left.className.startsWith(enemyClassName)) return left;
    if (right && right.className.startsWith(enemyClassName)) return right;
    if (up && up.className.startsWith(enemyClassName)) return up;
    if (down && down.className.startsWith(enemyClassName)) return down;
    if (leftUp && leftUp.className.startsWith(enemyClassName)) return leftUp;
    if (rightUp && rightUp.className.startsWith(enemyClassName)) return rightUp;
    if (leftDown && leftDown.className.startsWith(enemyClassName)) return leftDown;
    if (rightDown && rightDown.className.startsWith(enemyClassName)) return rightDown;

    return false;
  }

  isAttackedFromQueen(fIndex, fNumber, kColor) {
    let fieldRock = this.isAttackedFromRock(fIndex, fNumber, kColor);
    if (fieldRock) return fieldRock;
    let fieldBishop = this.isAttackedFromBishop(fIndex, fNumber, kColor, true);
    if (fieldBishop) return fieldBishop;

    return false;
  }
}

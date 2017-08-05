import {
  CheckListener
} from './CheckListener.js';

import {
  CheckMateListener
} from './CheckMateListener.js';

import jquery from 'jquery';

import {
  InfoWriter
} from './InfoWriter.js';

import {
  ReinforcmentsScanner
} from './ScanForReinforcments.js';

import {
  letters
} from './Constants.js';

import {
  KingAttackScanner
} from './KingAttackScan.js';

export class CheckKingWrapper {
  constructor(cache) {
    this._checkListener = new CheckListener();
    this._checkMateListener = new CheckMateListener();
    this._infoWriter = new InfoWriter();
    this._cache = cache;
    this._reinforcmentsScanner = new ReinforcmentsScanner();
    this._attackScanner = new KingAttackScanner();
  }

  listen(field, enemy, islegal, moveTurnValidator) {
    let kingAttacker = this._checkListener.listen(field);
    // TODO implement logic to fix checkmate problem.
    if (kingAttacker) {
      if (!islegal) {
        this._infoWriter.write('Check!');
        this._cache.setCheckCounter();
        // TODO
        this._cache.setCheckedKing(field);
      } else {
        // TODO if not legal move, dont execute!
        let currentField = document.getElementById(this._cache.currentId);
        currentField.className = '';
        let lastField = document.getElementById(this._cache.cachedId);
        lastField.className = this._cache.cachedClassName;
        this._infoWriter.write('Not a legal move!');
        moveTurnValidator.lastMove = this.getEnemyColor(lastField.className);
        return;
      }

      let isEnemyReinforced = this._reinforcmentsScanner.scanEnemy(field, enemy);
      if (isEnemyReinforced) {
        let canHelpTheKing = this._reinforcmentsScanner.scanSelf(field, enemy);
        if (! canHelpTheKing && ! this.freeFieldsAroundKing(field)) {
          this._infoWriter.write('Checkmate!');
        }
        //$(canHelpTheKing).removeClass('unclickable');
      }

      //if (true) {
        //$('td').addClass('unclickable');
        //$('.black-king').removeClass('unclickable');
        //$(enemy).removeClass('unclickable');
        // This method works

        //else {
        //  let canHelpTheKing = this._reinforcmentsScanner.scanSelf(field, enemy);
        //  if (canHelpTheKing) {
        //    //$(canHelpTheKing).removeClass('unclickable');
        //  }

      //  }
        //this.freeFieldsAroundKing(field);
        // TODO should check if the enemyAttacker has reinforcment and should check which figures
        // are capable of removing the ckeck threat by taking the enemy piece!!!
      //} else {
        // TODO white king check logic here
        //$('td').addClass('unclickable');
        //$('.white-king').removeClass('unclickable');
        //$(enemy).removeClass('unclickable');
        // This method works
        //let isEnemyReinforced = this._reinforcmentsScanner.scanEnemy(field, enemy);
        //if (isEnemyReinforced) {
        //  let canHelpTheKing = this._reinforcmentsScanner.scanSelf(field, enemy);
          //$(canHelpTheKing).removeClass('unclickable');
      //  } else {
      //    let canHelpTheKing = this._reinforcmentsScanner.scanSelf(field, enemy);
      //    if (! canHelpTheKing) {
          //  $(canHelpTheKing).removeClass('unclickable');
        //  }

      //  }
        //this.freeFieldsAroundKing(field);
    //  }

    //  return true;
    }
  }

  getEnemyColor(className) {
    let color = className.substr(0, className.indexOf('-'));
    if (color === 'white') {
      return 'black';
    } else {
      return 'white'
    }
  }

  getCurrentColor(className) {
    return className.substr(0, className.indexOf('-'));
  }

  freeFieldsAroundKing(kingPiece) {
    let pieceLetterIndex = letters.indexOf(kingPiece.id[0]);
    let pieceNumber = Number(kingPiece.id[1]);

    let up = document.getElementById(kingPiece.id[0] + '' + (pieceNumber + 1));
    let down = document.getElementById(kingPiece.id[0] + '' + (pieceNumber - 1));
    let left = document.getElementById(letters[pieceLetterIndex - 1] + '' + pieceNumber);
    let right = document.getElementById(letters[pieceLetterIndex + 1] + '' + pieceNumber);
    let upLeft = document.getElementById(letters[pieceLetterIndex - 1] + '' + (pieceNumber + 1));
    let upRight = document.getElementById(letters[pieceLetterIndex + 1] + '' + (pieceNumber + 1));
    let downLeft = document.getElementById(letters[pieceLetterIndex - 1] + '' + (pieceNumber - 1));
    let downRight = document.getElementById(letters[pieceLetterIndex + 1] + '' + (pieceNumber - 1));

    let numberOfFieldsToEscape = 0;

    if (up && ! this._attackScanner.isAttackedField(up, kingPiece)
        && up.className.indexOf('-') < 0) numberOfFieldsToEscape++;
    if (down &&!  this._attackScanner.isAttackedField(down, kingPiece)
        && down.className.indexOf('-') < 0) numberOfFieldsToEscape++;
    if (left && ! this._attackScanner.isAttackedField(left, kingPiece)
        && left.className.indexOf('-') < 0) numberOfFieldsToEscape++;
    if (right && ! this._attackScanner.isAttackedField(right, kingPiece)
        && right.className.indexOf('-') < 0) numberOfFieldsToEscape++;
    if (upLeft && ! this._attackScanner.isAttackedField(upLeft, kingPiece)
        && upLeft.className.indexOf('-') < 0) numberOfFieldsToEscape++;
    if (upRight && ! this._attackScanner.isAttackedField(upRight, kingPiece)
        && upRight.className.indexOf('-') < 0) numberOfFieldsToEscape++;
    if (downRight && ! this._attackScanner.isAttackedField(downRight, kingPiece)
        && downRight.className.indexOf('-') < 0) numberOfFieldsToEscape++;
    if (downLeft && ! this._attackScanner.isAttackedField(downLeft, kingPiece)
        && downLeft.className.indexOf('-') < 0) numberOfFieldsToEscape++;

    return numberOfFieldsToEscape;

    //if (up && ! this._attackScanner.isAttackedField(up, kingPiece)) $(up).removeClass('unclickable');
    //if (down && ! this._attackScanner.isAttackedField(down, kingPiece)) $(down).removeClass('unclickable');
    //if (left && ! this._attackScanner.isAttackedField(left, kingPiece)) $(left).removeClass('unclickable');
    //if (right && ! this._attackScanner.isAttackedField(right, kingPiece)) $(right).removeClass('unclickable');
    //if (upLeft && ! this._attackScanner.isAttackedField(upLeft, kingPiece)) $(upLeft).removeClass('unclickable');
    //if (upRight && ! this._attackScanner.isAttackedField(upRight, kingPiece)) $(upRight).removeClass('unclickable');
    //if (downRight && ! this._attackScanner.isAttackedField(downRight, kingPiece)) $(downRight).removeClass('unclickable');
    //if (downLeft && ! this._attackScanner.isAttackedField(downLeft, kingPiece)) $(downLeft).removeClass('unclickable');
  }
}

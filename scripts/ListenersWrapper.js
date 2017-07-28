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

export class CheckKingWrapper {
  constructor(cache) {
    this._checkListener = new CheckListener();
    this._checkMateListener = new CheckMateListener();
    this._infoWriter = new InfoWriter();
    this._cache = cache;
    this._reinforcmentsScanner = new ReinforcmentsScanner();
  }

  listen(field, enemy) {
    if (this._checkListener.listen(field)) {
      let kingIsNotMate = true;
      this._infoWriter.write('Check!')
      this._cache.setCheckCounter();
      // TODO
      this._cache.setCheckedKing(field);
      if (this._cache.blackKingCheck) {
        // TODO get the king to move if check exists, no other moves should be legal!!!
        $('td').addClass('unclickable');
        $('.black-king').removeClass('unclickable');
        $(enemy).removeClass('unclickable')
        // This method works
        let isEnemyReinforced = this._reinforcmentsScanner.scanEnemy(field, enemy);
        if (isEnemyReinforced) {
          // TODO should scan for pieces who can help the king
          let canHelpTheKing = this._reinforcmentsScanner.scanSelf(field, enemy);
          // TODO the method should return which pieces can help and should free them from
          // unclickable class to help their king
          // TODO Should check if the king can move to safe field!!!
          // if canHelpTheKing is false, then should check for king movements.
          // If no legal moves are available - Checkmate!
          // TODO should implement functionality to be able to defend check from distance with
          // other pieces.
          for (let i = 0; i < canHelpTheKing.length; i++) {
            $(canHelpTheKing[i]).removeClass('unclickable');
          }


        } else {
          // TODO

        }

        // TODO should check if the enemyAttacker has reinforcment and should check which figures
        // are capable of removing the ckeck threat by taking the enemy piece!!!
        //if (kingIsNotMate) $('td').removeClass('unclickable');
      } else {
        // TODO white king check logic here
      }
    } else if (this._checkMateListener.listen(field)) {
      this._infoWriter.write('Checkmate!');
      // TODO
    }

    // TODO
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
}

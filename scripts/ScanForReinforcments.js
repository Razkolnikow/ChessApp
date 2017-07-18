import {
  KingAttackScanner
} from './KingAttackScan.js';

export class ReinforcmentsScanner {
  constructor () {
    this._attackScanner = new kingAttackScanner();
  }

  scan(field) {
    return this.isAttackedField(field, field);
  }
}

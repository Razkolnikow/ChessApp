export class Cache {
  constructor() {
    this._lastId = '';
    this._lastColor = -1;
    this._blackKingMoved = false;
    this._whiteKingMoved = false;
    this._hWhiteRockMoved = false;
    this._aWhiteRockMoved = false;
    this._aBlackRockMoved = false;
    this._hBlackRockMoved = false;
  }

  get lastId() {
    return this._lastId;
  }

  set lastId(val) {
    this._lastId = val;
  }

  get lastColor() {
    return this._lastColor;
  }

  set lastColor(val) {
    this._lastColor = val;
  }

  get blackKingMoved() {
    return this._blackKingMoved;
  }

  set blackKingMoved(val) {
    this._blackKingMoved = val;
  }

  get whiteKingMoved() {
    return this._whiteKingMoved;
  }

  set whiteKingMoved(val) {
    this._whiteKingMoved = val;
  }

  get aWhiteRockMoved() {
    return this._aWhiteRockMoved;
  }

  set aWhiteRockMoved(val) {
    this._aWhiteRockMoved = val;
  }

  get hWhiteRockMoved() {
    return this._hWhiteRockMoved;
  }

  set hWhiteRockMoved(val) {
    this._hWhiteRockMoved = val;
  }

  get aBlackRockMoved() {
    return this._aBlackRockMoved;
  }

  set aBlackRockMoved(val) {
    this._aBlackRockMoved = val;
  }

  get hBlackRockMoved() {
    return this._hBlackRockMoved;
  }

  set hBlackRockMoved(val) {
    this._hBlackRockMoved = val;
  }

  moveAWhiteRock() {
    this.aBlackRockMoved = true;
  }

  moveHWhiteRock() {
    this.hWhiteRockMoved = true;
  }

  moveABlackRock() {
    this.aBlackRockMoved = true;
  }

  moveHBlackRock() {
    this.hBlackRockMoved = true;
  }

  moveBlackKing() {
    this.blackKingMoved = true;
  }

  moveWhiteKing() {
    this.whiteKingMoved = true;
  }
}

import jquery from 'jquery';

export class Printer {
  constructor() {
    this._counter = 0;
    this._row = 1;
  }

  printMove(piecePos, fieldPos) {
    var div = $('#moves');
    var element = $(`<span>${piecePos}-${fieldPos}&#9;</span>`)

    if (this._row === 1 && this._counter === 0) {
      element.prepend($('<span>1.</span>'))
    }

    if (this._counter === 2) {
      div.append($('<br>'));
      this._row++;
      element.prepend($(`<span>${this._row}.</span>`))
      div.append(element);
      this._counter = 1;
    } else {
      div.append(element);
      this._counter++;
    }
  }
}

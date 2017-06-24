export class BlackOrWhiteMoveValidator {
  constructor () {
    this._lastMove = '';
  }

  get lastMove()  {
    return this._lastMove;
  }

  set lastMove(blackOrWhite) {
    this._lastMove = blackOrWhite;
  }

  validateMove(blackOrWhite) {
    if (this.lastMove === blackOrWhite) {
      let message = '';
      if (blackOrWhite === 'white') {
        message = 'Black has to make a move!';
      } else {
        message = 'White has to make a move!';
      }

      $('#infoBox').text(message);
      $('#infoBox').show(500);
      setTimeout(function () {
        $('#infoBox').fadeOut(500);
      }, 3000);

      return false;
    } else {
      this.lastMove = blackOrWhite;
      return true;
    }
  }
}

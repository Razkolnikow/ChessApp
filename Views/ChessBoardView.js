import jquery from 'jquery';
import {
  validatePawnMove
} from '../scripts/PawnMoveValidator.js';
import {
  validatePawnTake
} from '../scripts/PawnMoveValidator.js';
import {
  validateBishopMove
} from '../scripts/BishopMoveValidator.js';
import {
  validateKnightMove
} from '../scripts/KnightMoveValidator.js';

import {
  validateKingMove
} from '../scripts/KingMoveValidator.js';

class Cache {
  constructor() {
    this._lastId = '';
    this._lastColor = -1;
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
}

let cache = new Cache();

let chessBoard = function createChessBoard() {
  let brown = '#DE923C';
  let table = $('<table>');
  let chessBoardRow = 8;
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  for (let i = 0; i < 8; i += 1) {
    let row = $('<tr>');
    let counter = i;
    for (let j = 0; j < 8; j += 1) {
      let td = $('<td>');
      td.attr('id', `${letters[j]}${chessBoardRow}`);
      if (counter % 2 !== 0) {
        td[0].style.backgroundColor = brown;
        if (i < 2) {
          if (i === 0 && j === 7) {
            td.addClass('black-rock clickable')
          } else if (i === 0 && j === 1) {
            td.addClass('black-knight clickable');
          } else if (i === 0 && j === 5) {
            td.addClass('black-bishop clickable');
          } else if (i === 0 && j === 3) {
            td.addClass('black-queen clickable');
          }
        } else if (i === 7) {
          if (j === 0) {
            td.addClass('white-rock clickable');
          } else if (j === 2) {
            td.addClass('white-bishop clickable');
          } else if (j === 4) {
            td.addClass('white-king clickable');
          } else if (j === 6) {
            td.addClass('white-knight clickable');
          }
        }
      }

      if (i < 2) {
        if (i === 1) {
          td.addClass('black-pawn clickable');
        } else if (i === 0 && j === 0 && counter % 2 === 0) {
          td.addClass('black-rock clickable');
        } else if (i === 0 && j === 6 && counter % 2 === 0) {
          td.addClass('black-knight clickable');
        } else if (i === 0 && j === 2 && counter % 2 === 0) {
          td.addClass('black-bishop clickable');
        } else if (i === 0 && j === 4 && counter % 2 === 0) {
          td.addClass('black-king clickable');
        }
      } else if (i > 5) {
        if (i === 6) {
          td.addClass('white-pawn clickable');

        } else if (i === 7) {
          if (j === 7) {
            td.addClass('white-rock clickable');

          } else if (j === 5) {
            td.addClass('white-bishop clickable');
          } else if (j === 3) {
            td.addClass('white-queen clickable');
          } else if (j === 1) {
            td.addClass('white-knight clickable');
          }
        }
      }

      td.click(function(event) {
        if (event.target.id === cache.lastId) {
          cache.lastId = '';
          event.target.style.backgroundColor = cache.lastColor;
          cache.lastColor = -1;
          return;
        }
        let lastClickedElement = document.getElementById(cache.lastId);

        if (event.target.className.length > 0) {
          // Pawn take piece
          if (cache.lastId.length > 0 && validatePawnTake(event.target, lastClickedElement) &&
            lastClickedElement.className.indexOf('pawn') >= 0) {
            takePiece();
            return;
          } else if (cache.lastId.length > 0 && validateBishopMove(event.target, lastClickedElement) &&
            lastClickedElement.className.indexOf('bishop') >= 0 && isValidTake(event.target, lastClickedElement)) {
            takePiece();
            return;
          } else if (cache.lastId.length > 0 && validateKnightMove(event.target, lastClickedElement) &&
            lastClickedElement.className.indexOf('knight') >= 0 && isValidTake(event.target, lastClickedElement)) {
            takePiece();
            return;
          } else if (cache.lastId.length > 0 && validateKingMove(event.target, lastClickedElement) &&
            lastClickedElement.className.indexOf('king') >= 0 && isValidTake(event.target, lastClickedElement)) {
              takePiece();
              return;
            }

          if (cache.lastColor !== -1) {
            let lastPiece = document.getElementById(cache.lastId);
            lastPiece.style.backgroundColor = cache.lastColor;
            cache.lastColor = -1;
            cache.lastId = '';
            return;
          }

          cache.lastId = event.target.id;
          cache.lastColor = event.target.style.backgroundColor;
          event.target.style.backgroundColor = 'red';

        } else {
          // Move pawn
          if (lastClickedElement.className.indexOf('pawn') >= 0) {
            if (validatePawnMove(event.target, lastClickedElement)) {
              movePiece();
            }
          } else if (lastClickedElement.className.indexOf('bishop') >= 0) {
            if (validateBishopMove(event.target, lastClickedElement)) {
              movePiece();
            }
          } else if (lastClickedElement.className.indexOf('knight') >= 0) {
            if (validateKnightMove(event.target, lastClickedElement)) {
              movePiece();
            }
          } else if (lastClickedElement.className.indexOf('king') >= 0) {
            if (validateKingMove(event.target, lastClickedElement)) {
              movePiece();
            }
          }
        }

        function takePiece() {
          event.target.className = lastClickedElement.className;
          lastClickedElement.className = '';
          lastClickedElement.style.backgroundColor = cache.lastColor;
          cache.lastColor = -1;
          cache.lastId = '';
        }

        function movePiece() {
          event.target.className = lastClickedElement.className;
          lastClickedElement.className = '';
          lastClickedElement.style.backgroundColor = cache.lastColor;
          cache.lastColor = -1;
          cache.lastId = '';
        }

        function isValidTake(field, piece) {
          if (field.className.indexOf(piece.className.substr(0, 5)) >= 0) {
            return false;
          }

          return true;
        }
      });

      row.append(td);
      counter += 1;
    }

    table.append(row);
    chessBoardRow--;
  }

  $('#content').append(table);
}

export {
  chessBoard
};

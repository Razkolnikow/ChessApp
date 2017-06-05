import jquery from 'jquery';

class Cache {
  constructor() {
    this._lastId = '';
  }

  get lastId() {
    return this._lastId;
  }

  set lastId(val) {
    this._lastId = val;
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
        if(event.target.className.length > 0) {
          cache.lastId = event.target.id;
        } else {
          let lastClickedElement = document.getElementById(cache.lastId);
          event.target.className = lastClickedElement.className;
          lastClickedElement.className = '';
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

export { chessBoard };

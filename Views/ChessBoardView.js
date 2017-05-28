import jquery from 'jquery';

let chessBoard = function createChessBoard() {
  let brown = '#DE923C';
  let table = $('<table>');
  for (let i = 0; i < 8; i += 1) {
    let row = $('<tr>');
    let counter = i;
    for (let j = 0; j < 8; j += 1) {
      let td = $('<td>');
      if (counter % 2 !== 0) {
          td[0].style.backgroundColor = brown;
          if (i < 2) {
            if (i === 0 && j === 7) {
              td.addClass('black-rock')
            } else if (i === 0 && j === 1) {
              td.addClass('black-knight');
            } else if (i === 0 && j === 5) {
              td.addClass('black-bishop');
            } else if (i === 0 && j === 3) {
              td.addClass('black-queen');
            }
          } else if (i === 7) {
            if (j === 0) {
              td.addClass('white-rock');
            } else if (j === 2) {
              td.addClass('white-bishop');
            } else if (j === 4) {
              td.addClass('white-king');
            } else if (j === 6) {
              td.addClass('white-knight');
            }
          }
      }

      if (i < 2) {
        if (i === 1) {
          td.addClass('black-pawn');
        } else if (i === 0 && j === 0 && counter % 2 === 0) {
          td.addClass('black-rock');
        } else if (i === 0 && j === 6 && counter % 2 === 0) {
          td.addClass('black-knight');
        } else if (i === 0 && j === 2 && counter % 2 === 0) {
          td.addClass('black-bishop');
        } else if (i === 0 && j === 4 && counter % 2 === 0) {
          td.addClass('black-king');
        }
      } else if (i > 5) {
        if (i === 6) {
          td.addClass('white-pawn');
        } else if (i === 7) {
          if (j === 7) {
            td.addClass('white-rock');
          } else if (j === 5) {
            td.addClass('white-bishop');
          } else if (j === 3) {
            td.addClass('white-queen');
          } else if (j === 1) {
            td.addClass('white-knight');
          }
        }
      }

      row.append(td);
      counter += 1;
    }

    table.append(row);
  }

  $('#content').append(table);
}

export { chessBoard };

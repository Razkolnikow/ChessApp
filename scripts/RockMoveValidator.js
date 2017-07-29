function validateRockMove(field, piece) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let fieldLetterIndex = letters.indexOf(field.id[0]);
  let pieceLetterIndex = letters.indexOf(piece.id[0]);
  let fieldNumber = Number(field.id[1]);
  let pieceNumber = Number(piece.id[1]);

  if (fieldLetterIndex === pieceLetterIndex) {
    if (fieldNumber > pieceNumber) {
      for (let i = fieldNumber - 1; i > pieceNumber; i--) {
        let nextPiece1 = document.getElementById(letters[fieldLetterIndex] + i);
        if (nextPiece1.className.indexOf('white') >= 0 || nextPiece1.className.indexOf('black') >= 0) {
          return false;
        }
      }
    } else {
      for (let i = pieceNumber - 1; i > fieldNumber; i--) {
        let nextPiece2 = document.getElementById(letters[fieldLetterIndex] + i);
        if (nextPiece2.className.indexOf('white') >= 0 || nextPiece2.className.indexOf('black') >= 0) {
          return false;
        }
      }
    }

    return true;
  }

  if (fieldNumber === pieceNumber) {
    if (fieldLetterIndex > pieceLetterIndex) {
      for (let i = fieldLetterIndex - 1; i > pieceLetterIndex; i--) {
        let nextPiece3 = document.getElementById(letters[i] + fieldNumber);
        if (nextPiece3.className.indexOf('white') >= 0 || nextPiece3.className.indexOf('black') >= 0) {
          return false;
        }
      }
    } else {
      for (let i = pieceLetterIndex - 1; i > fieldLetterIndex; i--) {
        let nextPiece4 = document.getElementById(letters[i] + fieldNumber);
        if (nextPiece4.className.indexOf('white') >= 0 || nextPiece4.className.indexOf('black') >= 0) {
          return false;
        }
      }
    }

    return true;
  }

  return false;
}

export { validateRockMove };

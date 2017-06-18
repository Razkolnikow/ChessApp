function validateRockMove(field, piece) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let fieldLetterIndex = letters.indexOf(field.id[0]);
  let pieceLetterIndex = letters.indexOf(piece.id[0]);
  let fieldNumber = Number(field.id[1]);
  let pieceNumber = Number(piece.id[1]);

  if (fieldLetterIndex === pieceLetterIndex) {
    if (fieldNumber > pieceNumber) {
      for (let i = fieldNumber - 1; i > pieceNumber; i--) {
        if (document.getElementById(letters[fieldLetterIndex] + i).className.length > 0) {
          return false;
        }
      }
    } else {
      for (let i = pieceNumber - 1; i > fieldNumber; i--) {
        if (document.getElementById(letters[fieldLetterIndex] + i).className.length > 0) {
          return false;
        }
      }
    }

    return true;
  }

  if (fieldNumber === pieceNumber) {
    if (fieldLetterIndex > pieceLetterIndex) {
      for (let i = fieldLetterIndex - 1; i > pieceLetterIndex; i--) {
        if (document.getElementById(letters[i] + fieldNumber).className.length > 0) {
          return false;
        }
      }
    } else {
      for (let i = pieceLetterIndex - 1; i > fieldLetterIndex; i--) {
        if (document.getElementById(letters[i] + fieldNumber).className.length > 0) {
          return false;
        }
      }
    }

    return true;
  }

  return false;
}

export { validateRockMove };

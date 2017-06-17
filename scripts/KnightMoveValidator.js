function validateKnightMove (field, piece) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let pieceLetterIndex = letters.indexOf(piece.id[0]);
  let pieceNumber = Number(piece.id[1]);
  let fieldLetterIndex = letters.indexOf(field.id[0]);
  let fieldNumber = Number(field.id[1]);

  if (fieldNumber - pieceNumber === 2
    && (fieldLetterIndex === (pieceLetterIndex + 1) || fieldLetterIndex === (pieceLetterIndex - 1))) {
    return true;
  } else if (pieceNumber - fieldNumber === 2
    && (fieldLetterIndex === (pieceLetterIndex + 1) || fieldLetterIndex === (pieceLetterIndex - 1))) {
    return true;
  } else if (fieldNumber - pieceNumber === 1
    && (fieldLetterIndex === (pieceLetterIndex + 2) || fieldLetterIndex === (pieceLetterIndex - 2))) {
    return true;
  } else if (pieceNumber - fieldNumber === 1
    && (fieldLetterIndex === (pieceLetterIndex + 2) || fieldLetterIndex === (pieceLetterIndex - 2))) {
    return true;
  }

  return false;
}

export { validateKnightMove };

function validateKingMove(field, piece) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let fieldLetterIndex = letters.indexOf(field.id[0]);
  let pieceLetterIndex = letters.indexOf(piece.id[0]);
  let fieldNumber = Number(field.id[1]);
  let pieceNumber = Number(piece.id[1]);
  // TODO Should add restriction for king move if the field is attacked by another piece!!!
  if (fieldLetterIndex === pieceLetterIndex
    && (fieldNumber - pieceNumber === 1 || pieceNumber - fieldNumber === 1)) {
    return true;
  } else if (fieldNumber === pieceNumber
    && (fieldLetterIndex - pieceLetterIndex === 1 || pieceLetterIndex - fieldLetterIndex === 1)) {
    return true;
  } else if (fieldNumber - pieceNumber === 1
    && (fieldLetterIndex - pieceLetterIndex === 1 || pieceLetterIndex - fieldLetterIndex === 1)) {
    return true;
  } else if (pieceNumber - fieldNumber === 1
    && (fieldLetterIndex - pieceLetterIndex === 1 || pieceLetterIndex - fieldLetterIndex === 1)) {
    return true;
  }

  return false;
}

function validateIfTargetedMoveIsAttacked(fieldIndice, fieldNum) {
  
}

export { validateKingMove };

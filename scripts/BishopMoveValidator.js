function validateBishopMove(field, piece) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let pieceLetter = piece.id[0];
  let pieceNumber = Number(piece.id[1]);
  let pieceIndex = letters.indexOf(pieceLetter);
  let fieldLetter = field.id[0];
  let fieldNumber = Number(field.id[1]);
  let fieldIndex = letters.indexOf(fieldLetter);
  if ((fieldIndex - pieceIndex) === (fieldNumber - pieceNumber)
      || (pieceIndex - fieldIndex) === (fieldNumber - pieceNumber)) {
        // TODO Bishop is not allowed to move through other pieces !!! 

      return true;
  }

  return false;
}

export { validateBishopMove };

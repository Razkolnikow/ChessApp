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
        if (fieldIndex > pieceIndex && fieldNumber > pieceNumber) {
          let targetNum1 = fieldNumber - 1;
          for (let i1 = fieldIndex - 1; i1 > pieceIndex; i1--) {
            if (document.getElementById(letters[i1] + targetNum1).className.length > 0) {
              return false;
            }

            targetNum1--;
          }
        } else if (pieceIndex > fieldIndex && fieldNumber > pieceNumber) {
          let targetNum2 = pieceNumber + 1;
          for (let i2 = pieceIndex - 1; i2 > fieldIndex; i2--) {
            if (document.getElementById(letters[i2] + targetNum2).className.length > 0) {
              return false;
            }

            targetNum2++;
          }
        } else if (fieldIndex > pieceIndex && pieceNumber > fieldNumber) {
          let targetNum3 = fieldNumber + 1;
          for (let i3 = fieldIndex - 1; i3 > pieceIndex; i3--) {
            if (document.getElementById(letters[i3] + targetNum3).className.length > 0) {
              return false;
            }

            targetNum3++;
          }
        } else if (pieceIndex > fieldIndex && pieceNumber > fieldNumber) {
          let targetNum4 = pieceNumber - 1;
          for (let i4 = pieceIndex - 1; i4 > fieldIndex; i4--) {
            if (document.getElementById(letters[i4] + targetNum4).className.length > 0) {
              return false;
            }

            targetNum4--;
          }
        }


      return true;
  }

  return false;
}

export { validateBishopMove };

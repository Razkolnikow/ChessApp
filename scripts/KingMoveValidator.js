function validateKingMove(field, piece, cache) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let fieldLetterIndex = letters.indexOf(field.id[0]);
  let pieceLetterIndex = letters.indexOf(piece.id[0]);
  let fieldNumber = Number(field.id[1]);
  let pieceNumber = Number(piece.id[1]);

  let isRWBishopFieldEmpty = document.getElementById('F1').className.length == 0;
  let isRWKnightFieldEmpty = document.getElementById('G1').className.length == 0;
  let isWQueenFieldEmpty = document.getElementById('D1').className.length == 0;
  let isLWBishopFieldEmpty = document.getElementById('C1').className.length == 0;
  let isLWKnightFieldEmpty = document.getElementById('B1').className.length == 0


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
  } else if (pieceLetterIndex == 4 && pieceNumber == 1
    && isRWBishopFieldEmpty && isRWKnightFieldEmpty
    && !cache.whiteKingMoved && !cache.hWhiteRockMoved) {
      let rock = document.getElementById('H1');
      let rockClass = rock.className;
      rock.className = '';
      document.getElementById('F1').className = rockClass;
      return true;
  } // TODO finish king castle and global cache details for king and rock first movement

  return false;
}

function validateIfTargetedFieldIsAttacked(fieldIndice, fieldNum) {

}

export { validateKingMove };

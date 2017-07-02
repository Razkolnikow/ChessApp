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
  let isRBBishopFiledEmpty = document.getElementById('F8').className.length == 0;
  let isRBKnightFieldEmpty = document.getElementById('G8').className.length == 0;
  let isLBQueenFieldEmpty = document.getElementById('D8').className.length == 0;
  let isLBBishopFieldEmpty = document.getElementById('C8').className.length == 0;
  let isLBKnightFieldEmpty = document.getElementById('B8').className.length == 0;


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
    && fieldLetterIndex === 6 && fieldNumber === 1
    && isRWBishopFieldEmpty && isRWKnightFieldEmpty
    && !cache.whiteKingMoved && !cache.hWhiteRockMoved) {
      let rock = document.getElementById('H1');
      let rockClass = rock.className;
      rock.className = '';
      document.getElementById('F1').className = rockClass;
      return true;
  } else if (pieceLetterIndex == 4 && pieceNumber == 1
    && fieldLetterIndex === 2 && fieldNumber === 1
    && isLWBishopFieldEmpty && isLWKnightFieldEmpty && isWQueenFieldEmpty
    && !cache.whiteKingMoved && !cache.aWhiteRockMoved) {
      let rock = document.getElementById('A1');
      let rockClass = rock.className;
      rock.className = '';
      document.getElementById('D1').className = rockClass;
      return true;
  } else if (pieceLetterIndex === 4 && pieceNumber === 8
    && fieldLetterIndex === 6 && fieldNumber === 8
    && isRBBishopFiledEmpty && isRBKnightFieldEmpty
    && !cache.blackKingMoved && !cache.hBlackRockMoved) {
      let rock = document.getElementById('H8');
      let rockClass = rock.className;
      rock.className = '';
      document.getElementById('F8').className = rockClass;
      return true;
  } else if (pieceLetterIndex === 4 && pieceNumber === 8
    && fieldLetterIndex === 2 && fieldNumber === 8
    && isLBQueenFieldEmpty && isLBBishopFieldEmpty && isLBKnightFieldEmpty
    && !cache.blackKingMoved && !cache.aBlackRockMoved) {
      let rock = document.getElementById('A8');
      let rockClass = rock.className;
      rock.className = '';
      document.getElementById('D8').className = rockClass;
      return true;
  }

  return false;
}

function validateIfTargetedFieldIsAttacked(fieldIndice, fieldNum) {

}

export { validateKingMove };

function validatePawnMove(field, piece) {
  let diff = Number(field.id[1]) - Number(piece.id[1]);
  // TODO Add unpassant functionality
  if (piece.className.indexOf('white') >= 0) {

    if (field.id[0] === piece.id[0] && (diff === 1 ||
      (diff === 2 && piece.id[1] === '2'
      && document.getElementById(piece.id[0] + '3').className.length === 0))) {
      return true;
    }
  } else {
    if (field.id[0] === piece.id[0] && (diff === -1 ||
      (diff === -2 && piece.id[1] === '7'))) {
      return true;
    }
  }

  return false;
}

function validatePawnTake(field, piece) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  if ((letters.indexOf(field.id[0]) - letters.indexOf(piece.id[0]) === 1
    || letters.indexOf(piece.id[0]) - letters.indexOf(field.id[0]) === 1)
    && Number(field.id[1]) - Number(piece.id[1]) === 1
    && field.className.indexOf('black') >= 0 && piece.className.indexOf('white-pawn') >= 0) {
    return true;
  } else if ((letters.indexOf(field.id[0]) - letters.indexOf(piece.id[0]) === 1
    || letters.indexOf(piece.id[0]) - letters.indexOf(field.id[0]) === 1)
    && Number(piece.id[1]) - Number(field.id[1]) === 1
    && field.className.indexOf('white') >= 0 && piece.className.indexOf('black-pawn') >= 0) {
    return true;
  }
}

export { validatePawnMove, validatePawnTake };

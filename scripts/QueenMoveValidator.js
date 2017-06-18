import {
  validateBishopMove
} from '../scripts/BishopMoveValidator.js';

import {
  validateRockMove
} from '../scripts/RockMoveValidator.js';

function validateQueenMove(field, piece) {
  if (validateBishopMove(field, piece)) {
    return true;
  } else if (validateRockMove(field, piece)) {
    return true;
  } else {
    return false;
  }
}

export { validateQueenMove };

import { AnyAction } from 'redux';

import { ACTION_STATUS_AUTHENTICATE } from './action';

const authenticateState = {
  status: false,
};

function authenticateReducer(state = authenticateState, action: AnyAction) {
  switch (action.type) {
    case ACTION_STATUS_AUTHENTICATE:
      return {
        status: action.payload.status,
      };
    default:
      return state;
  }
}

export default authenticateReducer;

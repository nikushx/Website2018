import { ISendCommand } from '../../actions/sendCommand';
import * as actionTypes from '../../constants/actionTypes';
import { SendCommandState } from '../../meta/types/Store';

export const INITIAL_STATE: SendCommandState = {
  log: [
    'please type /help for list of commands'
  ]
};

const sendCommand = (state: SendCommandState = INITIAL_STATE, action: ISendCommand) => {
  switch (action.type) {
    case actionTypes.SEND_COMMAND:
      return {
        log: [
          ...state.log
        ]
      };
    default:
      return state;
  }
};

export default sendCommand;

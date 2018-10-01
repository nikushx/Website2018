import * as actionTypes from '../../constants/actionTypes';

export interface ISendCommand {
  type: actionTypes.SEND_COMMAND;
  // cmd: string;
}

export const sendCommand = (): ISendCommand => ({
  type: actionTypes.SEND_COMMAND
});

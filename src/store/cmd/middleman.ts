import { LoggedCommand } from './reducer';

export const determineResponse = (cmd: string) => {
  let response: LoggedCommand;
  switch (cmd) {
    case 'ping':
      response = {
        type: 'regular',
        text: 'pong'
      }
      break;
    case 'help':
      response = {
        type: 'regular',
        text: 'sending a chopper'
      }
      break;
    default:
      response = {
        type: 'error',
        text: `'${cmd}' is not a valid command.`,
        color: 'red'
      }
      break;
  }
  return response;
}
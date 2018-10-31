import { LoggedCommandResponse, Payload } from './reducer';

export const determineResponse = (payload: Payload) => {
  let response: LoggedCommandResponse;
  switch (payload.text) {
    case 'ping':
      response = {
        type: 'imagetext',
        payload: {
          text: 'pong',
          imageUrl: 'test.png'
        }
      }
      break;
    case 'help':
      response = {
        type: 'regular',
        payload: {
          text: 'sending a chopper'
        }
      }
      break;
    default:
      response = {
        type: 'error',
        payload: {
          text: `'${payload.text}' is not a valid command.`
        }
      }
      break;
  }
  return response;
}
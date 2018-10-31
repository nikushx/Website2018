import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as cmd from './actions';
import { ADD, NEW_COMMAND } from './constants';

import { determineResponse } from './middleman';

export type CMDAction = ActionType<typeof cmd>;

export type LoggedCommand = {
  text: string;
}

interface BaseResponse {
  text: string;
  color?: string;
}

// interface RegularResponse extends BaseResponse {}

// interface ErrorResponse extends BaseResponse {}

export interface ImageTextResponse extends BaseResponse {
  imageUrl: string;
}

export type Payload = BaseResponse | ImageTextResponse; /* | RegularResponse | ErrorResponse */

export type LoggedCommandResponse = {
  type: 'error' | 'regular' | 'imagetext';
  payload: Payload;
}

export type CMDState = {
  readonly reduxCounter: number;
  readonly cmdLog: LoggedCommandResponse[];
  readonly commands: string[];
};

const cmdLogInit: LoggedCommandResponse[] = [
  {
    type: 'regular',
    payload: {
      text: 'please type \'help\' for list of commands',
      color: 'white'
    }
  }
];

const commandList = [
  'help',
  'ping'
];

export default combineReducers<CMDState, CMDAction>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {

      case ADD:
        return state + action.payload; // action: { type: "ADD"; payload: number; }

      default:
        return state;
    }
  },
  cmdLog: (state = cmdLogInit, action) => {
    switch (action.type) {
      case NEW_COMMAND:
        const response = determineResponse(action.payload);
        return [
          ...state,
          response
        ]
      default:
        return state;
    }
  },
  commands: (state = commandList, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
});
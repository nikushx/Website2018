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
  text: string; // TODO: make this an array and then display a span for each
  color?: string;
}

export interface ProjectResponse extends BaseResponse {
  title: string;
  subtitle: string;
  image?: string;
  link?: string;
}

export interface ImageTextResponse extends BaseResponse {
  header: string;
  imageUrl: string;
}

export type Payload = BaseResponse | ImageTextResponse | ProjectResponse; /* | RegularResponse | ErrorResponse */

export type LoggedCommandResponse = {
  type: 'error' | 'regular' | 'imagetext' | 'project';
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
          ...response
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
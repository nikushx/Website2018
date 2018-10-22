import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as cmd from './actions';
import { ADD, NEW_COMMAND } from './constants';

import { determineResponse } from './middleman';

export type CMDAction = ActionType<typeof cmd>;

// do we need a response LoggedCommand type?
export type LoggedCommand = {
  type: 'error' | 'regular';
  text: string;
  color?: string;
}

export type CMDState = {
  readonly reduxCounter: number;
  readonly cmdLog: LoggedCommand[];  // TODO: make this take an array of LoggedCommands that takes text and color and anything else
  readonly commands: string[];
};

const cmdLogInit: LoggedCommand[] = [
  {
    type: 'regular',
    text: 'please type \'help\' for list of commands',
    color: 'white'
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
        const response = determineResponse(action.payload.text);
        console.log(response);
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
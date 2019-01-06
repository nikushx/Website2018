import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as cmd from './actions';
import { ADD, NEW_COMMAND, CLEAR_COMMANDS } from './constants';

import { determineResponse } from './middleman';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type CMDAction = ActionType<typeof cmd>;

export type LoggedCommand = {
  text: string;
}

interface BaseResponse {
  text: string; // TODO: make this an array and then display a span for each
  color?: string;
}

export interface LinkResponse extends BaseResponse {
  link: string;
  icon: IconDefinition;
}

export interface HelpCommandResponse extends BaseResponse {
  command: string;
}

export interface ProjectResponse extends BaseResponse {
  title: string;
  subtitle: string;
  image?: string;
  link?: string;
}

export interface EmploymentResponse extends BaseResponse {
  title: string;
  position: string;
  image: string;
  dates: string;
  location: string;
}

export interface ImageTextResponse extends BaseResponse {
  header: string;
  imageUrl: string;
  body: string[];
}

export type Payload = BaseResponse
                      | ImageTextResponse
                      | ProjectResponse
                      | HelpCommandResponse
                      | LinkResponse
                      | EmploymentResponse;

export type LoggedCommandResponse = {
  type: 'error' | 'enteredcommand' | 'plain' | 'imagetext' | 'project' | 'helpcommand' | 'link' | 'employment';
  payload: Payload;
}

export type CMDState = {
  readonly reduxCounter: number;
  readonly cmdLog: LoggedCommandResponse[];
};

const cmdLogInit: LoggedCommandResponse[] = [
  {
    type: 'plain',
    payload: {
      text: 'please type \'help\' for list of commands',
    }
  }
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
        ];
      case CLEAR_COMMANDS:
        return cmdLogInit;
      default:
        return state;
    }
  }
});
import { action } from 'typesafe-actions';
import { ADD, NEW_COMMAND, CLEAR_COMMANDS } from './constants';
import { LoggedCommand } from './reducer';

export const add = (amount: number) => action(ADD, amount);
export const newCommand = (cmd: LoggedCommand) => action(NEW_COMMAND, cmd);
export const clearCommands = () => action(CLEAR_COMMANDS);
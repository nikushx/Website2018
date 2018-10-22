import { action } from 'typesafe-actions';
import { ADD, NEW_COMMAND } from './constants';
import { LoggedCommand } from './reducer';

export const add = (amount: number) => action(ADD, amount);
export const newCommand = (cmd: LoggedCommand) => action(NEW_COMMAND, cmd);
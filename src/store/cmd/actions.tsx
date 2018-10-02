import { action } from 'typesafe-actions';
import { ADD } from './constants';

export const add = (amount: number) => action(ADD, amount);
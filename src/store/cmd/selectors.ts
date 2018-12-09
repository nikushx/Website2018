import { CMDState } from './reducer';

export const getReduxCounter = (state: CMDState) => state.reduxCounter;
export const getCMDLog = (state: CMDState) => state.cmdLog;
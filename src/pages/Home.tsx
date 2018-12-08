import * as React from 'react';
import { StateType } from 'typesafe-actions';
import rootReducer from '../store/root-reducer';
import { cmdActions, CMDAction } from '../store/cmd';
import IntroText from '../components/common/IntroText';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { LoggedCommandResponse } from 'src/store/cmd/reducer';
import Command from 'src/components/common/Command';

export type Props = {
  testProp: number;
  cmdLog: LoggedCommandResponse[];
  onIncrement: (num: any) => any;
}

class IHomePage extends React.Component<Props> {

  addNum = () => {
    this.props.onIncrement(1);
  }

  render() {
    return (
      <div id='CMDWrapper'>
        <div id="CMDContainer">
          <IntroText>Nikush Dalia</IntroText>
          <IntroText>Web Developer, Entrepreneur, Creative</IntroText>
          <IntroText>Welcome To My Portfolio Website</IntroText>
          <IntroText>Built in React, Redux, Typescript</IntroText>
          {
            this.props.cmdLog.map((cmd, i) => {
              return (
                <Command key={i} cmd={cmd} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

type RootState = StateType<typeof rootReducer>;
type RootAction = CMDAction;
// type RootAction = ReactRouterAction | CountersAction;

const mapStateToProps = (state: RootState) => ({
  testProp: state.cmd.reduxCounter,
  cmdLog: state.cmd.cmdLog
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onIncrement: cmdActions.add,
}, dispatch);

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(IHomePage);
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

  onWrapperClick = () => {
    const input = document.getElementById('CMDInput');
    if (input) {
      input.focus();
    };
  }

  render() {
    return (
      <div id='CMDWrapper' onClick={this.onWrapperClick}>
        <div id="CMDContainer">
          <IntroText color='#90ee02'>Nikush Dalia</IntroText>
          <IntroText color='#aaf255'>Web Developer, Entrepreneur, Creative</IntroText>
          <IntroText color='#c6f68d'>Welcome To My Portfolio Website</IntroText>
          <IntroText color='#defabb'>Built in React, Redux, Typescript</IntroText>
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
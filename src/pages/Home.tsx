import * as React from 'react';
import { StateType } from 'typesafe-actions';
import rootReducer from '../store/root-reducer';
import { cmdActions, CMDAction } from '../store/cmd';
import IntroText from '../components/common/IntroText';
import LoggedCommand from '../components/common/LoggedCommand';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const cmdWindowStyles: React.CSSProperties = {
  padding: '10px'
}

export type Props = {
  onIncrement: () => any;
}

type State = {
  log: string[];
};

class IHomePage extends React.Component<Props, State> {
  state = { log: [] }

  componentDidMount() {
    this.setState({
      log: [
        ...this.state.log,
        'please type /help for list of commands'
      ]
    })
  }

  addToLog(cmd: string) {
    if (cmd !== '') {
      this.setState({
        log: [
          ...this.state.log,
          cmd
        ]
      })
    }
  }

  render() {
    console.log(this.props);
    return (
      <div style={cmdWindowStyles}>
        <IntroText>Nikush Dalia</IntroText>
        <IntroText>Web Developer, Entrepreneur, Creative</IntroText>
        <IntroText>Welcome To My Portfolio Website</IntroText>
        <IntroText>Built in React, Redux, Typescript</IntroText>
        {
          this.state.log.map((cmd, i) => {
            return (
              <LoggedCommand key={i} cmd={cmd} />
            );
          })
        }
      </div>
    );
  }
}

type RootState = StateType<typeof rootReducer>;
type RootAction = CMDAction;
// type RootAction = ReactRouterAction | CountersAction;

const mapStateToProps = (state: RootState) => ({
  testProp: state.cmd.reduxCounter
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onIncrement: cmdActions.add,
}, dispatch);

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(IHomePage);
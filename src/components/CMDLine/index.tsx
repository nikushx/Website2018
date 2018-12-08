import * as React from 'react';
import Input from '../common/Input';
import { StateType } from 'typesafe-actions';
import { rootReducer } from '../../store';
import { CMDAction, cmdActions } from '../../store/cmd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LoggedCommand } from 'src/store/cmd/reducer';

const navStyles: React.CSSProperties = {
  position: 'fixed',
  backgroundColor: '#03DAC6',
  width: '100%',
  bottom: 0,
  height: '40px'
};

const inputStyles: React.CSSProperties = {
  backgroundColor: '#3700B3',
  width: '100%',
  height: '100%',
  padding: '0 10px',
  color: '#fff',
  fontFamily: `'Source Code Pro', monospace`
}

type Props = {
  commands: string[];
  onSendCommand: (cmd: LoggedCommand) => void;
};

type State = {
  cmdInput: string
};

class ICMDLine extends React.Component<Props, State> {
  state = { cmdInput: '' }

  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      cmdInput: e.currentTarget.value
    })
  }

  updateScroll = () => {
    const element = document.getElementById('CMDWrapper') as HTMLElement;
    setTimeout(() => {
      element.scrollTop = element.scrollHeight
    }, 0);
  }

  sendNewCommand = () => {
    if (this.state.cmdInput === '') return;
    this.props.onSendCommand(
      {
        text: this.state.cmdInput
      }
    );
    this.setState({
      cmdInput: ''
    });
    this.updateScroll();
  }

  render() {
    return (
      <div style={navStyles}>
        {
          /*
          <Link to={ROOT_PATH}>Home</Link>
          <Link to={TICKER_PATH} style={{ marginLeft: '20px' }}>
            Ticker
          </Link>
          */
        }
        <Input
          styles={inputStyles}
          placeholder="> type commands here"
          autoFocus={true}
          onChange={this.onInputChange}
          sendCommand={this.sendNewCommand}
          value={this.state.cmdInput}
        />
      </div>
    );
  }
}

type RootState = StateType<typeof rootReducer>;
type RootAction = CMDAction;

const mapStateToProps = (state: RootState) => ({
  // cmdLog: state.cmd.cmdLog,
  commands: state.cmd.commands
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onSendCommand: cmdActions.newCommand,
}, dispatch);

export const CMDLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(ICMDLine);
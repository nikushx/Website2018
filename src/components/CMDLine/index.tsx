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
  onSendCommand: (cmd: LoggedCommand) => void;
  onClearCommands: () => void;
};

type State = {
  cmdInput: string
};

export const updateScroll = () => {
  const element = document.getElementById('CMDWrapper') as HTMLElement;
  setTimeout(() => {
    element.scrollTop = element.scrollHeight
  }, 400);
}

class ICMDLine extends React.Component<Props, State> {
  state = { cmdInput: '' }

  componentDidMount() {
    const helperCMD = document.getElementById('helperCMD');
    if (helperCMD) {
      setTimeout(() => {
        helperCMD.style.opacity = '1';
      }, 1000);
    }
  }

  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      cmdInput: e.currentTarget.value
    })
  }

  sendNewCommand = () => {
    if (this.state.cmdInput === '') return;

    switch (this.state.cmdInput) {
      case 'clear':
      case 'cls':
      case 'clean':
        this.props.onClearCommands();
        break;
      default:
        this.props.onSendCommand(
          {
            text: this.state.cmdInput
          }
        );
        break;
    }

    this.setState({
      cmdInput: ''
    });

    updateScroll();
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
        <div id='helperCMD'><b>Confused?</b> This website is meant to look like a developer console.<br /><br />Type <b>help</b> below and press enter to start interacting with the website.</div>
        <Input
          uniqueId='CMDInput'
          styles={inputStyles}
          placeholder="$ type commands here"
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
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onSendCommand: cmdActions.newCommand,
  onClearCommands: cmdActions.clearCommands
}, dispatch);

export const CMDLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(ICMDLine);
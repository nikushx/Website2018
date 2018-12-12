import * as React from 'react';
import { connect } from 'react-redux';
import { cmdActions, CMDAction } from '../../../store/cmd';
import { StateType } from 'typesafe-actions';
import rootReducer from '../../../store/root-reducer';
import { Dispatch, bindActionCreators } from 'redux';
import { LoggedCommand } from 'src/store/cmd/reducer';
import { updateScroll } from 'src/components/CMDLine';

type Props = {
  command: string;
  description: string;
  onSendCommand: (cmd: LoggedCommand) => void;
  onClearCommands: () => {}
}

class IHelpCommand extends React.Component<Props> {

  sendHelpCommand = () => {
    switch (this.props.command) {
      case 'clear':
      case 'cls':
      case 'clean':
        this.props.onClearCommands();
        break;
      default:
        this.props.onSendCommand(
          {
            text: this.props.command
          }
        );
        break;
    }

    updateScroll();
  }

  render() {
    return (
      <div className='helpcommand--wrapper'>
        <div className='helpcommand--container' onClick={this.sendHelpCommand}>
          <div className='helpcommand--command'>{this.props.command}</div>
          |
          <div className='helpcommand--description'>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StateType<typeof rootReducer>) => ({});

const mapDispatchToProps = (dispatch: Dispatch<CMDAction>) => bindActionCreators({
  onSendCommand: cmdActions.newCommand,
  onClearCommands: cmdActions.clearCommands
}, dispatch);

export const HelpCommand = connect(
  mapStateToProps,
  mapDispatchToProps
)(IHelpCommand);
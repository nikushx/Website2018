import * as React from 'react';
import { LoggedCommand } from 'src/store/cmd/reducer';

type Props = {
  cmd: LoggedCommand;
}

class Command extends React.Component<Props> {
  render() {
    return (
      <p style={{
        color: this.props.cmd.color
      }}>> {this.props.cmd.text}</p>
    );
  }
}

export default Command;

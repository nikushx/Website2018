import * as React from 'react';

type Props = {
  cmd: string;
}

class LoggedCommand extends React.Component<Props> {
  render() {
    return (
      <p>> {this.props.cmd}</p>
    );
  }
}

export default LoggedCommand;

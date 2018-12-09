import * as React from 'react';

type Props = {
  command: string;
  description: string;
}

class HelpCommand extends React.Component<Props> {

  render() {
    return (
      <div className='helpcommand--wrapper'>
        <div className='helpcommand--container'>
          <div className='helpcommand--command'>{this.props.command}</div>
          |
          <div className='helpcommand--description'>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default HelpCommand;

import * as React from 'react';
import { LoggedCommandResponse, ImageTextResponse } from 'src/store/cmd/reducer';
import ImageText from '../ImageText';

type Props = {
  cmd: LoggedCommandResponse;
}

class Command extends React.Component<Props> {
  getImageTextResponse = (): JSX.Element => {
    const response = this.props.cmd.payload as ImageTextResponse;
    return (
      <ImageText
        source={response.imageUrl}
        text={response.text}
      />
    );
  }

  render() {
    const commandColor = this.props.cmd.payload.color
      ?
        this.props.cmd.payload.color
      :
        this.props.cmd.type === 'error'
          ?
            'red'
          :
            'white'
      ;
    
    const type = this.props.cmd.type;
    let response: JSX.Element;
    switch (type) {
      case 'imagetext':
        response = this.getImageTextResponse()
        break;
      default:
        response = <p style={{ color: commandColor }}>> {this.props.cmd.payload.text}</p>
    }

    return response;
  }
}

export default Command;

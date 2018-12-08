import * as React from 'react';
import { LoggedCommandResponse, ImageTextResponse, ProjectResponse } from 'src/store/cmd/reducer';
import ImageText from '../ImageText';
import Project from '../Project';

type Props = {
  cmd: LoggedCommandResponse;
}

class Command extends React.Component<Props> {
  getProjectResponse = (): JSX.Element => {
    const response = this.props.cmd.payload as ProjectResponse;
    return (
      <Project
        title={response.title}
        subtitle={response.subtitle}
        text={response.text}
        image={response.image}
        link={response.link}
      />
    );
  }

  getImageTextResponse = (): JSX.Element => {
    const response = this.props.cmd.payload as ImageTextResponse;
    return (
      <ImageText
        source={response.imageUrl}
        header={response.header}
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
      case 'project':
        response = this.getProjectResponse()
        break;
      default:
        response = <p className='generic--response' style={{ color: commandColor }}>> {this.props.cmd.payload.text}</p>
    }

    return response;
  }
}

export default Command;

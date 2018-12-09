import * as React from 'react';
import { LoggedCommandResponse, ImageTextResponse, ProjectResponse, HelpCommandResponse, LinkResponse } from 'src/store/cmd/reducer';
import ImageText from '../ImageText';
import Project from '../Project';
import HelpCommand from '../HelpCommand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  cmd: LoggedCommandResponse;
}

class Command extends React.Component<Props> {
  getLinkResponse = (): JSX.Element => {
    const response = this.props.cmd.payload as LinkResponse;
    return (
      <div className='link--container'>
        <FontAwesomeIcon className='link--icon' icon={response.icon} />
        <a className='link--hyperlink' href={response.link} target='_blank'>{response.text}</a>
      </div>
    )
  }
  getHelpCommandResponse = (): JSX.Element => {
    const response = this.props.cmd.payload as HelpCommandResponse;
    return (
      <HelpCommand
        command={response.command}
        description={response.text}
      />
    );
  }

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
        header={response.text}
        body={response.body}
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
      case 'link':
        response = this.getLinkResponse();
        break;
      case 'imagetext':
        response = this.getImageTextResponse()
        break;
      case 'project':
        response = this.getProjectResponse()
        break;
      case 'helpcommand':
        response = this.getHelpCommandResponse()
        break;
      default:
        response = <p className='generic--response' style={{ color: commandColor }}>> {this.props.cmd.payload.text}</p>
    }

    return response;
  }
}

export default Command;

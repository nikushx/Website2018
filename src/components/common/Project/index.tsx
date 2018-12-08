import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  link?: string;
}

type State = {
  open: boolean
}

class Project extends React.Component<Props, State> {
  state = { open: false }

  toggleProject = () => {
    this.setState({
      open: (this.state.open) ? false : true
    });
  }

  render() {

    const caretStyles: React.CSSProperties = {
      transform: (this.state.open) ? 'rotate(90deg)' : 'rotate(0deg)'
    };

    const imageStyles: React.CSSProperties = {
      width: (this.state.open) ? '200px' : '100px'
    };

    return (
      <div className='project--wrapper'>
        <ReactTooltip type='info' />
        <div className='project--container'>
          <div className='project--collapseToggle desktop' onClick={this.toggleProject} data-tip='Open Description'>
            <FontAwesomeIcon className='caretToggle' style={caretStyles} icon={faCaretRight} />
          </div>
          {
            (this.props.image)
              ?
                <div className='project--image__wrapper'>
                  <a target='_blank' href={this.props.link} data-tip='Open Project Link'>
                    <img className='project--image' src={this.props.image} style={imageStyles} />
                  </a>
                </div>
              :
                undefined
          }
          <div className='project--text__wrapper'>
            <div className='project--title__wrapper'>
            <span>{this.state.open}</span>

              <a target='_blank' href={this.props.link} className='project--title' data-tip='Open Project Link'>{this.props.title}</a>
              <span className='project--subtitle'>{this.props.subtitle}</span>
            </div>
            <div className='project--collapseToggle mobile' onClick={this.toggleProject} data-tip='Open Description'>
              <FontAwesomeIcon className='caretToggle' style={caretStyles} icon={faCaretRight} >close</FontAwesomeIcon>
            </div>
            {
              (this.state.open)
                ?
                  <span className='project--text'>{this.props.text}</span>
                :
                  undefined
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

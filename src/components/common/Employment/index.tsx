import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  title: string;
  position: string;
  image: string;
  dates: string;
  location: string;
  text: string;
}

type State = {
  open: boolean
}

class Employment extends React.Component<Props, State> {
  state = { open: false }

  toggleEmployment = () => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      this.setState({
        open: (this.state.open) ? false : true
      });
    }
  }

  render() {

    const caretStyles: React.CSSProperties = {
      transform: (this.state.open) ? 'rotate(90deg)' : 'rotate(0deg)'
    };

    const imageStyles: React.CSSProperties = {
      width: (this.state.open) ? '200px' : '100px'
    };

    const enabledTooltips = (window.matchMedia("(max-width: 768px)").matches) ? true : false;

    return (
      <div className='employment--wrapper'>
        <ReactTooltip type='info' disable={enabledTooltips} />
        <div className='employment--container' onClick={this.toggleEmployment}>
          <div className='employment--collapseToggle desktop' data-tip='Open Description'>
            <FontAwesomeIcon className='caretToggle' style={caretStyles} icon={faCaretRight} />
          </div>
          <div className='employment--image__wrapper'>
            <img className='employment--image' src={this.props.image} style={imageStyles} />
          </div>
          <div className='employment--text__wrapper'>
            <div className='employment--title__wrapper'>
              <span className='employment--title'>{this.props.title}</span>
              <span className='employment--position'>{this.props.position}</span>
              <span className='employment--location'>{this.props.location}</span>
              <span className='employment--dates'>{this.props.dates}</span>
            </div>
            {
              (this.state.open)
                ?
                  <span className='employment--text'>{this.props.text}</span>
                :
                  undefined
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Employment;

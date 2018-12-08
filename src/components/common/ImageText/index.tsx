import * as React from 'react';

type Props = {
  source: string;
  header: string;
  text: string;
}

class ImageText extends React.Component<Props> {
  render() {
    return (
      <div className='imagetext--wrapper'>
        <div className='imagetext--container'>
          <img className='imagetext--image' src={this.props.source} />
          <div className='imagetext--text__wrapper'>
            <span className='imagetext--header'>{this.props.header}</span>
            <span className='imagetext--text'>{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageText;

import * as React from 'react';

type Props = {
  source: string;
  text: string;
}

class ImageText extends React.Component<Props> {
  render() {
    return (
      <div className='imagetext--wrapper'>
        <div className='imagetext--container'>
          <img className='imagetext--image' src={this.props.source} />
            <p className='imagetext--text'>{this.props.text}</p>
          </div>
      </div>
    );
  }
}

export default ImageText;

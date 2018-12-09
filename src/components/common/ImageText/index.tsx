import * as React from 'react';

type Props = {
  source: string;
  header: string;
  body: string[];
}

class ImageText extends React.Component<Props> {
  render() {
    return (
      <div className='imagetext--wrapper'>
        <div className='imagetext--container'>
          <img className='imagetext--image' src={this.props.source} />
          <div className='imagetext--text__wrapper'>
            <span className='imagetext--header'>{this.props.header}</span>
            {
              this.props.body.map((text, i) => {
                return (
                  <span key={i} className='imagetext--text'>{text}</span>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ImageText;

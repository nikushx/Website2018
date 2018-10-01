import * as React from 'react';

const introTextStyles: React.CSSProperties = {
  color: '#777'
}

class IntroText extends React.Component {
  render() {
    return (
      <p style={introTextStyles}>{this.props.children}</p>
    );
  }
}

export default IntroText;

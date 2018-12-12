import * as React from 'react';

type Props = {
  color: string;
}

class IntroText extends React.Component<Props> {
  render() {
    const introTextStyles: React.CSSProperties = {
      color: this.props.color
    }

    return (
      <p style={introTextStyles}>{this.props.children}</p>
    );
  }
}

export default IntroText;

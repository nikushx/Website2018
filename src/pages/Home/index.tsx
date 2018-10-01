import * as React from 'react';
import IntroText from '../../components/common/IntroText';
import LoggedCommand from '../../components/common/LoggedCommand';

const cmdWindowStyles: React.CSSProperties = {
  padding: '10px'
}

type State = {
  log: string[];
};

class HomePage extends React.Component<object, State> {
  state = { log: [] }

  componentDidMount() {
    this.setState({
      log: [
        ...this.state.log,
        'please type /help for list of commands'
      ]
    })
  }

  addToLog(cmd: string) {
    if (cmd !== '') {
      this.setState({
        log: [
          ...this.state.log,
          cmd
        ]
      })
    }
  }

  render() {

    return (
      <div style={cmdWindowStyles}>
        <IntroText>Nikush Dalia</IntroText>
        <IntroText>Web Developer, Entrepreneur, Creative</IntroText>
        <IntroText>Welcome To My Portfolio Website</IntroText>
        <IntroText>Built in React, Redux, Typescript</IntroText>
        {
          this.state.log.map((cmd, i) => {
            return (
              <LoggedCommand key={i} cmd={cmd} />
            );
          })
        }
      </div>
    );
  }
}

export default HomePage;
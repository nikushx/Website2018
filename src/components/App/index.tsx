import * as React from 'react';

import { HomePage } from '../../pages';
import { CMDLine } from '../CMDLine';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div id='CornerRibbon'>Click around!</div>
        <HomePage />
        <CMDLine />
      </div>
    );
  }
}

export default App;

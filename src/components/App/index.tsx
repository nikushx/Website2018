import * as React from 'react';

import { HomePage } from '../../pages';
import { CMDLine } from '../CMDLine';

class App extends React.Component {

  hideHelperCMD() {
    const helperCMD = document.getElementById('helperCMD');
    if (helperCMD) {
      setTimeout(() => {
        helperCMD.style.opacity = '0';
        setTimeout(() => {
          helperCMD.style.display = 'none';
        }, 2000);
      }, 2000);
    }
  }

  render() {
    return (
      <div className='App' onKeyDown={this.hideHelperCMD} onClick={this.hideHelperCMD}>
        <div id='CornerRibbon'>Click around!</div>
        <HomePage />
        <CMDLine />
      </div>
    );
  }
}

export default App;

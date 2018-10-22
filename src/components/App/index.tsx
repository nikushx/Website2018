import * as React from 'react';

import { HomePage } from '../../pages';
import { CMDLine } from '../CMDLine';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CMDLine />
        <HomePage />
      </div>
    );
  }
}

export default App;

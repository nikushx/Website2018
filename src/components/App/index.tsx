import * as React from 'react';

import Routes from '../../Routes';
import CMDLine from '../CMDLine';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CMDLine />
        <Routes />
      </div>
    );
  }
}

export default App;

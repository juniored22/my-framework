import React  from 'react';
import Routes from './routers'

class App extends React.Component {

  render() {
    /**
     *  @theme dark, white
     *  
     */
    const theme = "white"
    return (
      <div className={theme}>
        <Routes />
      </div>
    )
  }
}

export default App;
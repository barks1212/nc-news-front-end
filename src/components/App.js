import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './Home-page';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path="/" render={() => <Home/>}/>

      </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
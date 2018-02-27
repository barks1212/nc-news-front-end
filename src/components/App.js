import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home-page';
import UserPage from './User-page';
import SingleArticle from './Single-article';
import NotFound from './Not-found';

class App extends React.Component {
  render() {
    return (
      <section className="main">
        <section className="bodyContent">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/topics/:topic/articles" render={(params) => <Home {...params} />} />
              <Route exact path="/topics/:topic" render={(params) => <Home {...params} />} />
              <Route exact path="/users/:username" render={(params) => <UserPage {...params} />} />
              <Route exact path="/users/:username/articles" render={(params) => <UserPage {...params} />} />
              <Route exact path="/users/:username/comments" render={(params) => <UserPage {...params} />} />
              <Route exact path="/articles/:articleId" render={(params) => <SingleArticle {...params}/>}/>
              <Route path="/*" component={NotFound}/>
            </Switch>
          </BrowserRouter>
        </section>
      </section>
    )
  }
}

export default App;
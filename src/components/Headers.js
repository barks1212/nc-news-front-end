import React from 'react';
import HeaderPicture from './Header-picture';
import HomeTopicFlare from './Home-topic-flare';
import TopicsNav from './Topic-nav';
import PT from 'prop-types';


const Headers = (props) => (
  <section className="headers hero is-mobile is-small">
    <section className="hero-header">
      <section className="container" id="ncnewsContainer">
        <h1 className="subtitle has-text-white has-text-weight-bold is-size-4">NC NEWS</h1>
      </section>
    </section>
    <section className="hero-body is-paddingless" id="bannerMain">
          <section className="container" id="headersContainer">
        <HeaderPicture showArticles={props.showArticles} topic={props.topic}/>
        {props.showArticles ?
            <section className="homeDetails is-mobile is-overlay">
              <HomeTopicFlare topic={props.topic ? props.topic : null} />
              <TopicsNav topic={props.topic ? props.topic : null} />
            </section>
            : null}
          </section>
      </section>
    </section>
)

Headers.propTypes =  {
topic: PT.string
}

export default Headers;
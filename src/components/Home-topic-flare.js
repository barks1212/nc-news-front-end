import React from 'react';
import PT from 'prop-types';

const iconLookup = {
  'football': function () {
    return 'fa fa-futbol-o is-size-2';
  },
  'coding': function () {
    return 'fa fa-code is-size-2';
  },
  'cooking': function () {
    return 'fa fa-cutlery is-size-2';
  }
}


const HomeTopicFlare = (props) => (
  <section className="container" id="topicFlare">
    <section className="headIcon">
      {props.topic == null ? <i className="fa fa-home is-size-1" id="headerIcon" aria-hidden="true"></i> : <i className={iconLookup[props.topic]()} id="headerIcon" aria-hidden="true"></i>}
    </section>
    <section className="headIconText">
    <h2 className="subtitle is-size-6 has-text-white">{props.topic == null ? 'All Stories' : props.topic[0].toUpperCase() + props.topic.substring(1)}</h2>
    </section>
  </section>
)

HomeTopicFlare.propTypes = {
  topic: PT.string
}

export default HomeTopicFlare;
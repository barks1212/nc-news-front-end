import React from 'react';
import PT from 'prop-types';

const iconLookup = {
  'football': function() {
    return 'fa fa-futbol-o is-size-4';
  },
  'coding': function() {
    return 'fa fa-code is-size-4';
  },
  'cooking': function() {
    return 'fa fa-cutlery is-size-4';
  }
}


const ArticleIcon = (props) => (
  <section className="icons">
  {props.topic && <i className={iconLookup[props.topic]()} id="topicIcon" aria-hidden="true"></i>}
  </section>
)

iconLookup.propTypes = {
  topic: PT.string
}

export default ArticleIcon
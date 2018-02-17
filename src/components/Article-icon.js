import React from 'react';

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

export default ArticleIcon
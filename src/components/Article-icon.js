import React from 'react';

const iconLookup = {
  'football': function() {
    return 'fa fa-futbol-o';
  },
  'coding': function() {
    return 'fa fa-code';
  },
  'cooking': function() {
    return 'fa fa-cutlery';
  }
}


const ArticleIcon = (props) => (
  <section className="icons">
  <i className={iconLookup[props.topic]()} aria-hidden="true"></i>
  </section>
)

export default ArticleIcon
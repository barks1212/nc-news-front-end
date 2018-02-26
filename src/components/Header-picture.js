import React from 'react';
import PT from 'prop-types';

const picLookup = {
  'coding': function () {
    return '/pictures/nc2.jpg_large'
  },
  'football': function () {
    return 'https://1.bp.blogspot.com/-vchAU8lkggw/WQQja_zTLEI/AAAAAAAAAUc/UVKWo8_TMnsq4Sfb4Q5F26ihyFCRhqXUgCLcB/s1600/Anfield%2BHD%2BPictures.jpg'
  },
  'cooking': function () {
    return '/pictures/cooking.jpg'
  },
  'null': function () {
    return '/pictures/nc1.jpg_large'
  }
}

const HeaderPicture = (props) => (
  <section className="pictureMain">
  {props.showArticles ? <section className="container is-paddingless is-marginless" id="headerPictureContainer">

   {props.topic != null ? <img src={picLookup[props.topic]()} id="headerPic"/> : <img src={'/pictures/nc1.jpg_large'} id="headerPic"/>}
   </section>

  :<section className="container is-paddingless is-marginless" id="headerPictureContainer">
   <img src="https://www.advisorkhoj.com/resources/images/articles/Top-5-Mutual-Fund/Top-5-Mutual-Fund.jpg" /> 
  </section>}
   
  </section>
)

HeaderPicture.propTypes = {
  topic: PT.string,
  showArticles: PT.bool
}


export default HeaderPicture;
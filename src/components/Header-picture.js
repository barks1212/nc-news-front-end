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
  {props.showArticles ? <section className="container is-mobile is-paddingless is-marginless" id="headerPictureContainer">

   {props.topic != null ? <img src={picLookup[props.topic]()} id="headerPic" alt=''/> : <img src={'/pictures/nc1.jpg_large'} id="headerPic" alt=''/>}
   </section>

  :<section className="container is-mobile is-paddingless is-marginless" id="headerPictureContainer">
   <img id="headerPic" src="http://www.gsfdcy.com/data/img/32/1486476-fireworks-wallpaper.jpg" alt='' /> 
  </section>}
   
  </section>
)

HeaderPicture.propTypes = {
  topic: PT.string,
  showArticles: PT.bool
}


export default HeaderPicture;
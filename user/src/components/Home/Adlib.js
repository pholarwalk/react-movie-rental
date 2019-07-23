import React from 'react';





// images

// styles

class Adlib extends React.Component {
  render () {
    return(

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img  src={require ("../../images/combination.jpg")} class="d-block w-100" alt="b&b"/>
          </div>
          <div class="carousel-item">
              <img src={require ("../../images/toplineup.jpg")} class="d-block w-100" alt="vac"/>
          </div>
          <div class="carousel-item">
              <img src={require ("../../images/bollywood.jpg")} class="d-block w-100" alt="godfather"/>
          </div>
      </div>
  </div>       

    );
  }
}
export default Adlib;

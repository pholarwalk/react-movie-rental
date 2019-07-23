import React from 'react';

// config

// components


// images

// styles

class Bollywood extends React.Component {
  render() {
    return (
      <div class="Bollywood">
      <h2>BOLLYWOOD</h2>
      <div class="card-deck">
          <div class="card">
              <img src={require ("../../images/jumanji.jpg")} class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                 
                  <button type="button" class="btn1 btn-success"  onclick="payWithPaystack()" >RENT</button>
              </div>
          </div>
          <div class="card">
              <img src={require ("../../images/mazerunner.jpg")} class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                 
                  <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
              </div>
          </div>
          <div class="card">
              <img src={require ("../../images/frye.jpg")} class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
            
                  <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
              </div>
          </div>
      
          <div class="card">
              <img src={require ("../../images/godfather.jpg")}  class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                
                  <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
              </div>
          </div>
          <div class="card">
              <img src={require ("../../images/bay watch.jpg")} class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                 
                  <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
              </div>
          </div>
          <div class="card">
              <img src={require ("../../images/black panther.jpg")} class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  
                  <button type="button" class="btn1 btn-success"  onclick="payWithPaystack()" >RENT</button>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Bollywood;

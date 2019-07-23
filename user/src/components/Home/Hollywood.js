import React from 'react';

// config

// components


// images

// styles

class Hollywood extends React.Component {
  render() {
    return (
      <div class="Hollywood">
        <h2>HOLLYWOOD</h2>
        <div class="card-deck">

            <div class="card">
                    
                <img src={require ("../../images/inventor.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    
                    <button type="button" class="btn1 btn-success"  onclick="payWithPaystack()">RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/johnwick.jpeg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                       
                    <h5 class="card-title">Card title</h5>
                   
                 
                    <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/kungfupanda.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                   
                    <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
        
            <div class="card">
                <img src={require ("../../images/pulpfiction.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                   
                    <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/replicas.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                   
                    <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/pulpfiction.jpg")}class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  
                    <button type="button" class="btn1 btn-success"  onclick="payWithPaystack()">RENT</button>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

export default Hollywood;

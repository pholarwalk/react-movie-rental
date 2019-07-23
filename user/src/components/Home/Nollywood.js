import React from 'react';

// config

// components

// images

// styles

class Nollywood extends React.Component {
  render() {
    return (
      <div class="Nollywood">
        <h2>NOLLYWOOD</h2>
        <div class="card-deck">
            <div class="card">
                <img src={require ("../../images/terminator.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    
                    <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/titanic.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    
                    <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/thor.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                   
                    <button type="button" class="btn1 btn-success"  onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
        
            <div class="card">
                <img src={require ("../../images/sicario.jpg")}class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
            
                    <button type="button" class="btn1 btn-success" onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/shrek.jpg")} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  
                    <button type="button" class="btn1 btn-success"  onclick="payWithPaystack()" >RENT</button>
                </div>
            </div>
            <div class="card">
                <img src={require ("../../images/scarface.jpg")} class="card-img-top" alt="..."/>
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

export default Nollywood;

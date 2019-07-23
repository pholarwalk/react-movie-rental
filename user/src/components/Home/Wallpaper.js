import React, { Component } from 'react'

class Wallpaper extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
            <div class="row-lg-12 row-sm-12 row-md-12 row-xs-12 index">
                <div class="col-lg-8 col-sm-8 col-md-8 col-xs-8">
                    <div class="card-fluid">
                        <div class="card-body">
                        <img src={require ("../../images/kungfupanda.jpg")}class="card-img-top" alt="..."/>
                            <img src={require ("../../images/sicario.jpg")}class="card-img-top" alt="..."/>
                            <img src={require ("../../images/thor.jpg")} class="card-img-top" alt="..."/>
                            <img src={require ("../../images/jumanji.jpg")} class="card-img-top" alt="..."/>
                            <img src={require ("../../images/mazerunner.jpg")} class="card-img-top" alt="..."/>
                            <img src={require ("../../images/frye.jpg")} class="card-img-top" alt="..."/>
                            <img src={require ("../../images/terminator.jpg")} class="card-img-top" alt="..."/>
                            <img src={require ("../../images/titanic.jpg")} class="card-img-top" alt="..."/>
                            
                        </div>
                    </div>

                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Wallpaper;
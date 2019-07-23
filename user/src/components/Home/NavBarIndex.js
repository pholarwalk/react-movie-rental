import React, { Component } from 'react'

export default class NavBarIndex extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark ">
            <button class="navbar-toggler mc-auto" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>

            <a class="navbar-brand   ml" href="home.html"><img src="http://i64.tinypic.com/312zdpy.png" width="60" alt="logo"/></a>
           
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <input id="long1" type="number email" name="name" placeholder="Phone or email"/>
                    </li>
                    <li class="nav-item">
                        <input id="long2" type="password" name="name" placeholder="Password"/>
                    </li>


                    <a href="home.html"><button type="button" class="btn btn-success"> Log In </button></a>

                </ul>

            </div>
        </nav>
            </div>
        )
    }
}

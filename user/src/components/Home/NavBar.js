import React from 'react';

// config

// components


// images

// styles

class NavBar extends React.Component {
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
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true"
                aria-expanded="false">Film Industry</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="/">Hollywood</a>
                <a class="dropdown-item" href="/">Nollywood</a>
                <a class="dropdown-item" href="/">Bollywood</a>
            </div>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    
                    <li class="nav-item" id="search">
                        <form id="searcher">
                            Type a Movie Title  <input id="search-api" type="search"/>
                        </form>


                    </li>
                    <a href="./index.html"><button type="button" class="btn btn-success">Log out</button></a>

                </ul>
                </div>
                </nav>
                </div>

    );
  }
}

export default NavBar;

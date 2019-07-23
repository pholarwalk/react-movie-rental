import React from 'react';

// config

// components
import NavBar from "./Home/NavBar";
import Search from "./Home/Search";
import Adlib from "./Home/Adlib";
import Nollywood from "./Home/Nollywood";
import Hollywood from "./Home/Hollywood";
import Bollywood from "./Home/Bollywood";
import NavBarIndex from "./Home/NavBarIndex";
import Wallpaper from "./Home/Wallpaper";
import Form from "./Home/Form";


import Footer from "./Home/Footer";

// images

// styles
import '../styles/App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavBarIndex/>
        <Wallpaper/>
        <Form/>
        <Footer/>
        <NavBar />
        <Search />
        <Adlib />
        <Hollywood />
        <Nollywood />
        <Bollywood />
        
        <Footer />
      </div>

    );
  }
}

export default App;

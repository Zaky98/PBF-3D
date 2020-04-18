import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About.jsx";
import ListBarang from './container/Product';
import Keranjang from './container/Keranjang';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Warungpedia</h1>
          <h5 className="subtitle">Beli online masa kini</h5>
          <br></br>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/barang">Barang</NavLink></li>
            <li><NavLink to="/keranjang">Keranjang</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/barang" component={ListBarang}/>
            <Route exact path="/keranjang" component={Keranjang}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
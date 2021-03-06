import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import ListBarang from '../container/Product';
import Keranjang from '../container/PostKeranjang';
import Post from "./List";
import { connect } from "react-redux";
import { logoutUser } from "../actions";


class Main extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (
      <HashRouter>
        <div>
          <h1 className="title">Warungpedia</h1>
          <h5 className="subtitle">Belanja online masa kini</h5>
          <br></br>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addbarang">Add barang</NavLink></li>
            <li><NavLink to="/list">List barang</NavLink></li>
            <li><a href="mailto:zakyluthfansa@gmail.com">Contact us</a>  </li>
            <li className="right">
              <NavLink to="/logout" onClick={this.handleLogout}>
                Logout
                {isLoggingOut}
                {logoutError}
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/addbarang" component={ListBarang}/>
            <Route exact path="/list" component={Post}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}
 
export default connect(mapStateToProps)(Main);
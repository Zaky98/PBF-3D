import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
 
  export default function Barang() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/mouse">Mouse</Link>
              </li>
              <li>
                <Link to="/keyboard">Keyboard</Link>
              </li>
            </ul>
            <hr />
    
            <Switch>
              <Route path="/mouse">
                <Mouse />
              </Route>
              <Route path="/keyboard">
                <Keyboard />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
    function Mouse() {
      
      let {path, url} = useRouteMatch();
      return (
        <div>
          <h2>Mouse</h2>
          <ul>
            <li>
              <Link to={`${url}/Rexus Xierra X12, Rexus Xierra 110`}>Rexus</Link>
            </li>
            <li>
              <Link to={`${url}/M337, M171`}>Logitech</Link>
            </li>
          </ul>
    
          <Switch>
            <Route exact path={path}>
              <h3>Please select an item.</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
              <Topic />
            </Route>
          </Switch>
        </div>
      );
    }

    function Keyboard() {
      
        let {path, url} = useRouteMatch();
        return (
          <div>
            <h2>Mouse</h2>
            <ul>
              <li>
                <Link to={`${url}/Razer Huntsman Elit, Razer Blackwidow`}>Razer</Link>
              </li>
              <li>
                <Link to={`${url}/MK22O, K122`}>Logitech</Link>
              </li>
            </ul>
      
            <Switch>
              <Route exact path={path}>
                <h3>Please select an item.</h3>
              </Route>
              <Route path={`${path}/:topicId`}>
                <Topic />
              </Route>
            </Switch>
          </div>
        );
      }
    
    function Topic() {
      let {topicId} = useParams();
    
      return (
        <div>
          <h3>{topicId}</h3>
        </div>
      );
    }
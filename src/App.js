import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //runs only once , when the the app component loads...

    //firebase's listener/observer, that watches the curr logged in user
    // this code is fired off when user logs in/out...
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* the default root should ALWAYS be at the bottom, or it never gets 'LISTENED' TO /PICKED UP */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

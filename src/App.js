import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

//stripe functionality
const promise = loadStripe(
  "pk_test_51Hhp7PBleRBoSjYtAHmINp0iAKsvP7XvPUBARMXKUflX8TNVFxie3y0sJ2nGWOVJBjVzNfVtBSELOCADjca38NC800eAmrdl49"
);

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
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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

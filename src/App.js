import React from "react";
import Home from "./pages/Home";
import CryptoAssetDetails from "./pages/CryptoAssetDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/cryptodetails">
              <CryptoAssetDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;

import  DashBoard  from "../pages/DashBoard";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

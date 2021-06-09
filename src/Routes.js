import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutMeCard from "./AboutMeCard"
import AboutMePage from "./AboutMePage";
import HomePage from "./HomePage";
/** Site-wide routes.
 *
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes() {


  return (
      <div className="BodyDiv">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/aboutme">
            <AboutMePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;

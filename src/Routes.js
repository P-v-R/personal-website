import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutMeCard from "./AboutMeCard"
import SiteBody from "./SiteBody";
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
            <SiteBody />
          </Route>
          <Route exact path="/aboutme">
            <AboutMeCard />
          </Route>



          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;

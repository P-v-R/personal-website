import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import AboutMePage from "./AboutMePage";
import HomePage from "./HomePage";
import { AnimatePresence } from "framer-motion"
import ContactForm from "./ContactForm";
import JokeCard from "./JokeCard";


/** Site-wide routes.
 *
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes() {
  const location = useLocation();

  return (
    <div className="BodyDiv">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/aboutme">
            <AboutMePage />
          </Route>
          <Route exact path="/contact">
            <ContactForm />
          </Route>
          <Route exact path="/joke">
            <JokeCard />
          </Route>
          <Redirect to="/" />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default Routes;

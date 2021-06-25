import React from "react";
import { render } from "@testing-library/react";
import AboutMeCard from "../AboutMeCard"

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<AboutMeCard title="test title" textbody="test body"/>);
});
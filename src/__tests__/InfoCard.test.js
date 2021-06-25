import React from "react";
import { render } from "@testing-library/react";
import InfoCard from "../InfoCard"

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<InfoCard />);
});
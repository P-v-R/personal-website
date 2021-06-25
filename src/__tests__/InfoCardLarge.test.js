import React from "react";
import { render } from "@testing-library/react";
import InfoCardLarge from "../InfoCardLarge"

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<InfoCardLarge />);
});
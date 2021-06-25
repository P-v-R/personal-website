import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "../ProgressBar"

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<ProgressBar percent="50" title="test title" rating="test"/>);
});


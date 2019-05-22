import React from "react";

import { render, fireEvent } from "react-testing-library";

import Speaker from "./Speaker";
import { italic } from "ansi-colors";

describe("<Speaker/>", () => {
  it("should call the speak func passed as a prop", () => {
    const speak = jest.fn();
    //pass the mock as a prop
    const { getByText } = render(<Speaker speak={speak} />);
    fireEvent.click(getByText(/speak/i));
    expect(speak).toHaveBeenCalled();
  });
});

import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "react-testing-library";

import "jest-dom/extend-expect";
import App from "./App";

describe.skip("<App />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe.skip("mocking", () => {
  it("is mocking me", () => {
    const mock = jest.fn(); //variable that holds an empty function
    const actual = mock("smile"); //should be undefined
    expect(actual).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});

describe.skip("mocking", () => {
  it("controls the mock", () => {
    const mock = jest.fn(() => "hello");
    const actual = mock("smile");

    expect(actual).toBe("hello");
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("smile");
  });
});

describe("speak()", () => {
  it("should update the message when the speak btn is clicked", () => {
    const { getByText, queryByText } = render(<App />);

    expect(queryByText(/you are not mocking me/i)).toBeTruthy();
    const button = getByText(/speak/i);
    fireEvent.click(button);

    expect(queryByText(/you are not mocking me/i)).toBeTruthy();
  });
});

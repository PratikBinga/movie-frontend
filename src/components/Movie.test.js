import React from "react";
import { shallow } from "enzyme";
import Movie from "./Movie";

const titleBtnText = "Post Review";

let wrapped = shallow(<Movie />);
describe("Movie", () => {
  it("renders the btn post review text", () => {
    expect(wrapped.find("button").text()).toEqual(titleBtnText);
  });
});

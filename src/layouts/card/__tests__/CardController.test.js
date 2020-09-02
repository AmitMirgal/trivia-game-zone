import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardController from "../CardController";

describe("<CardController/>", () => {
  let wrapper;
  const prepare = () => {
    wrapper = shallow(<CardController />);
  };

  it("renders CardController component", () => {
    // when
    prepare();

    // then
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("count number of props", () => {
    // when
    prepare();

    const propsSize = Object.keys(wrapper.props()).length;

    // then
    expect(propsSize).toBe(2);
  });
});

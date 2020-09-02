import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardContent from "../CardContent";

describe("<CardContent/>", () => {
  let wrapper;
  const prepare = () => {
    wrapper = shallow(<CardContent />);
  };

  it("renders CardContent component", () => {
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
    expect(propsSize).toBe(4);
  });
});

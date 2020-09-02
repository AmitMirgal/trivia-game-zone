import React from "react";
import { mount } from "enzyme";

import PrimaryButton from "./PrimaryButton";

describe("<PrimaryButton/>", () => {
  let wrapper;
  const defaultProps = {
    onClick: () => {},
  };
  const prepare = (props) => {
    wrapper = mount(<PrimaryButton {...defaultProps} {...props} />);
  };

  it("button element exists", () => {
    // when
    prepare();

    // then
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("button label is True", () => {
    // given
    const props = {
      label: "True",
    };

    // when
    prepare(props);

    // then
    expect(wrapper.find("button").text()).toBe("True");
  });

  it("button is triggered", () => {
    const props = {
      onClick: jest.fn(),
    };
    // when
    prepare(props);

    wrapper.find(PrimaryButton).simulate("click");

    // then
    expect(props.onClick).toHaveBeenCalled();
  });
});

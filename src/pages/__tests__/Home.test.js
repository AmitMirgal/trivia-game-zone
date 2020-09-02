import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "../Home";
import { HOME_TITLE, HOME_DESCRIPTION } from "../../common/constants/constant";
import PrimaryButton from "../../components/PrimaryButton";

describe("<Home/>", () => {
  let wrapper;
  const prepare = () => {
    wrapper = mount(<Home />);
  };

  it("renders Home component", () => {
    // when
    prepare();

    // then
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Home title", () => {
    // when
    prepare();

    // then
    expect(wrapper.find("h1").text()).toBe(HOME_TITLE);
  });

  it("Home description", () => {
    // when
    prepare();

    // then
    expect(wrapper.find("p").text()).toBe(HOME_DESCRIPTION);
  });

  it("button label is Begin", () => {
    // when
    prepare();

    // then
    expect(wrapper.find("button").text()).toBe("Begin");
  });

  it("button is triggered", () => {
    // when
    const mockCallBack = jest.fn();
    const buttonWrapper = mount(
      <PrimaryButton onClick={mockCallBack}>Begin</PrimaryButton>
    );

    buttonWrapper.find("button").simulate("click");

    // then
    expect(mockCallBack).toHaveBeenCalled();
  });
});

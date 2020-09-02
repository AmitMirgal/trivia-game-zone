import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Quiz from "../Quiz";
import PrimaryButton from "../../components/PrimaryButton";

describe("<Quiz/>", () => {
  let wrapper;
  const prepare = () => {
    wrapper = mount(<Quiz />);
  };

  it("renders Quiz component", () => {
    // when
    prepare();

    // then
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("button is triggered", () => {
    // when
    const mockCallBack = jest.fn();
    const buttonWrapper = mount(
      <PrimaryButton onClick={mockCallBack}>True</PrimaryButton>
    );

    buttonWrapper.find("button").simulate("click");

    // then
    expect(mockCallBack).toHaveBeenCalled();
  });
});

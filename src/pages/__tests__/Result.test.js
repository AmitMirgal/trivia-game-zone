import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Result from "../Result";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/another-route",
    search: "",
    hash: "",
    state: { result: [] },
    key: "result",
  }),
  useHistory: jest.fn().mockReturnValue({}),
}));

describe("<Result/>", () => {
  let wrapper;

  const prepare = () => {
    wrapper = shallow(<Result />);
  };

  it("renders Result component", () => {
    // when
    prepare();

    // then
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

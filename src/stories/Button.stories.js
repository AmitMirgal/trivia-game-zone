import React from "react";

import PrimaryButton from "../components/PrimaryButton";

export default {
  title: "Components/Button",
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "PlaceHolder",
};

import React from "react";
import { shallow } from "enzyme";
import CustomTextArea from "components/customTextArea";

it("Should render a textarea with given title", () => {
  const wrapper = shallow(<CustomTextArea value="hello" />);
  expect(wrapper).toMatchSnapshot();
  const textarea = wrapper.find("textarea");
  expect(textarea).toBeDefined();
});

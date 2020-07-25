import React from "react";
import { shallow } from "enzyme";
import CustomInput from "../components/customInput";

it("Should render a textarea with given title", () => {
  const wrapper = shallow(<CustomInput value="hello" />);
  expect(wrapper).toMatchSnapshot();
  const textarea = wrapper.find("textarea");
  expect(textarea).toBeDefined();
});

import React from "react";
import { shallow } from "enzyme";

import Warning from "../components/warning";

it("Should render a span with given title", () => {
  const wrapper = shallow(<Warning title="hello" />);
  expect(wrapper).toMatchSnapshot();
  const span = wrapper.find("span");
  expect(span).toBeDefined();
  const result = span.text();
  expect(result).toBe("hello");
});

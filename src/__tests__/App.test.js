import React from "react";
import { shallow, mount } from "enzyme";

import App from "App";

it("Should render the dom", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("main")).toBeDefined();
});

it("The score to be 1 for similarity on same JSON", () => {
  const wrapper = mount(<App />);
  const textareas = wrapper.find("textarea");
  expect(textareas.length).toBe(2);
  const testJSONString = JSON.stringify({
    a: 1,
    b: 3,
  });
  textareas.at(0).simulate("change", { target: { value: testJSONString } });
  textareas.at(1).simulate("change", { target: { value: testJSONString } });
  expect(wrapper.find("span#score").text()).toBe("Similarity Score: 1");
});

it("The score to be less than 1 for similarity on different JSONs", () => {
  const wrapper = mount(<App />);
  const textareas = wrapper.find("textarea");
  expect(textareas.length).toBe(2);
  const testJSONString1 = JSON.stringify({
    a: 1,
    b: 3,
  });
  const testJSONString2 = JSON.stringify({
    a: 1,
    b: 4,
  });
  textareas.at(0).simulate("change", { target: { value: testJSONString1 } });
  textareas.at(1).simulate("change", { target: { value: testJSONString2 } });
  const similarityScoreString = wrapper.find("span#score").text();
  expect(similarityScoreString).not.toBe("Similarity Score: 1");
  const similarityScore = Number.parseFloat(
    similarityScoreString.split(":")[1].trim()
  );
  expect(similarityScore).toBeLessThan(1);
});

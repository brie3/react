import React from "react";
import renderer from "react-test-renderer";
import { Message } from "./Message";
import { shallow } from "enzyme";

describe("<Message>", () => {
    it(" renders our content", () => {
        const props = { name: "My user", content: "My content" };

        const element = renderer.create(<Message {...props} />).toJSON();
        expect(element).toMatchSnapshot();
    });
    it("message without name", () => {
        const props = { content: "My content" };
        const element = shallow(<Message {...props} />);
        expect(element.contains(<b>"Anonymous"</b>)).toBe(true);
    });
    it("message with name", () => {
        const props = { name: "My user" };
        const element = shallow(<Message {...props} />);
        expect(element.contains(<b>{props.name}</b>)).toBe(true);
    });
});

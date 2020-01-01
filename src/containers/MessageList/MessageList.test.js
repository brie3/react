import React from "react";
import { MessageList } from "./MessageList";
import { Message } from "../../components/Message/Message";
import { shallow } from "enzyme";

describe("<MessageList>", () => {
    it(" renders with message list", () => {
        const props = [
            { name: "My user 1", content: "My content 1" },
            { name: "My user 2", content: "My content 2" },
            { name: "My user 3", content: "My content 3" }
        ];

        const element = shallow(<MessageList messages={props} />);
        props.map(item => {
            expect(element.contains(<Message {...item} />)).toBe(true);
        });
    });
});

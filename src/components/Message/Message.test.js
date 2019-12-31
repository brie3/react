import React from "react";
import renderer from "react-test-renderer";
import { Message } from "./Message";

describe("<Message>", () => {
    it(" renders our content", () => {
        const props = { name: "My user", content: "My content" };

        const element = renderer.create(<Message {...props} />);
    });
});

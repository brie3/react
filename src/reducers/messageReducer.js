import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";
import update from "react-addons-update";

const defaultState = {
    messages: {
        0: {
            name: "Vasia Pupkine",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        1: {
            name: "Doloremque",
            content:
                "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
        },
        2: {
            name: "Voluptatum",
            content:
                "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
        },
        3: {
            name: "Aspernatur",
            content: "Veritatis aliquam eaque provident voluptatum fuga?"
        },
        4: {
            name: "Velit",
            content:
                "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus. Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
        }
    }
};

export default function messageReducer(state = defaultState, action) {
    switch (action.type) {
    case SEND_MESSAGE: {
        const message = action.message;
        return update(state, {
            messages: {
                $merge: {
                    [action.messageID]: {
                        name: message.name,
                        content: message.content
                    }
                }
            }
        });
    }
    case DELETE_MESSAGE: {
        delete state.messages[action.messageId];
        return update(state, {
            messages: {
                $merge: {}
            }
        });
    }
    default:
        return state;
    }
}

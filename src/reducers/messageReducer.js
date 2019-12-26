import { SEND_MESSAGE, DELETE_MESSAGES } from "../actions/messageActions";

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
            return {
                messages: {
                    ...state.messages,
                    [action.messageID]: action.message
                }
            };
        }
        case DELETE_MESSAGES: {
            let messages = state.messages;
            action.messageIDs.forEach(element => {
                delete messages[element];
            });
            return {
                messages: {
                    ...messages
                }
            };
        }
        default:
            return state;
    }
}

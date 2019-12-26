import { ADD_CHAT, DELETE_CHAT, DELETE_CHATS } from "../actions/chatActions";
import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
    DELETE_MESSAGES
} from "../actions/messageActions";
import update from "react-addons-update";

const defaultState = {
    chats: {
        1: {
            title: "chat-1",
            messageIDs: [0, 1]
        },
        2: {
            title: "chat-2",
            messageIDs: [2, 3]
        },
        3: {
            title: "chat-3",
            messageIDs: [4]
        }
    }
};

export default function chatReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_CHAT:
            console.log(action);
            return update(state, {
                chats: {
                    $merge: {
                        [action.chatID]: {
                            title: action.title,
                            messageIDs: []
                        }
                    }
                }
            });
        case DELETE_CHAT:
            delete state.chats;
            return state;
        case DELETE_CHATS:
            console.log(action);
            delete state.chats;
            return state;
        case SEND_MESSAGE:
            return update(state, {
                chats: {
                    [action.chatID]: {
                        messageIDs: { $push: [action.messageID] }
                    }
                }
            });
        case DELETE_MESSAGE:
            delete state.chats;
            return state;
        case DELETE_MESSAGES:
            console.log(action);
            state.chats[action.chatID].messageIDs = [];
            return state;
        default:
            return state;
    }
}

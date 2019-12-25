import { ADD_CHAT, DELETE_CHAT } from "../actions/chatActions";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";
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
        let title = action.title
            ? action.title
            : `chat-${Object.keys(state.chats).length + 1}`;
        return update(state, {
            chats: {
                $merge: {
                    [action.chatID]: {
                        title: title,
                        messageIDs: []
                    }
                }
            }
        });
    case DELETE_CHAT:
        delete state.chats[action.chatID];
        return update(state, {
            chats: {
                $merge: {}
            }
        });
    case SEND_MESSAGE:
        return update(state, {
            chats: {
                [action.chatID]: {
                    messageIDs: { $push: [action.messageID] }
                }
            }
        });
    case DELETE_MESSAGE:
        let id = state.chats[action.chatID].messageIDs.find(
            id => id == action.messageID
        );
        return update(state, {
            chats: {
                [action.chatID]: {
                    messageIDs: { $splice: [[id, 1]] }
                }
            }
        });
    default:
        return state;
    }
}

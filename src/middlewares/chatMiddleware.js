import { ADD_CHAT } from "../actions/chatActions";
import { SEND_MESSAGE } from "../actions/messageActions";

const chatMiddleware = state => next => action => {
    switch (action.type) {
        case ADD_CHAT:
            createChat(action);
        case SEND_MESSAGE:
            if (!(action.chatID in state.getState().chatReducer.chats)) {
                createChat(action);
            }
    }
    return next(action);
};

function createChat(action) {
    if (!action.chatID) {
        action.chatID = new Date().valueOf();
    }
    if (!action.title) {
        action.title = `chat-${action.chatID}`;
    }
    return action;
}

export default chatMiddleware;

import { ADD_CHAT } from "../actions/chatActions";

const chatMiddleware = state => next => action => {
    switch (action.type) {
        case ADD_CHAT:
            action.chatID = new Date().valueOf();
            action.title = action.title
                ? action.title
                : `chat-${action.chatID}`;
    }
    return next(action);
};
export default chatMiddleware;

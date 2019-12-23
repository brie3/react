import { addChat } from "../actions/chatActions";

export const chatMiddleware = store => next => action => {
    if (action.type == addChat.toString()) {
        action.payload.chatID = new Date().valueOf();
    }
    return next(action);
};

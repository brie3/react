import { ADD_CHAT } from "../actions/chatActions";

const chatMiddleware = state => next => action => {
    switch (action.type) {
        case ADD_CHAT:
            action.chatID = new Date().valueOf();
    }
    return next(action);
};
export default chatMiddleware;

import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
    DELETE_MESSAGES
} from "../actions/messageActions";

const messageMiddleware = state => next => action => {
    switch (action.type) {
        case SEND_MESSAGE:
            action.messageID = new Date().valueOf();
            break;
        case DELETE_MESSAGES:
            action.messageIDs = state.getState().chatReducer.chats[
                action.chatID
            ].messageIDs;
    }
    return next(action);
};
export default messageMiddleware;

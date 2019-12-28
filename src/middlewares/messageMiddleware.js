import {
    SEND_MESSAGE,
    DELETE_MESSAGES,
    isNew
} from "../actions/messageActions";
import { formatDate } from "../utils/helpers";

const messageMiddleware = state => next => action => {
    switch (action.type) {
        case SEND_MESSAGE:
            action.message = {
                name: action.message.name || "Anonymous",
                content: action.message.content,
                messageID: new Date().valueOf(),
                date: formatDate(),
                isNew: true
            };
            setTimeout(() => state.dispatch(isNew(action.messageID)), 2000);
            break;
        case DELETE_MESSAGES:
            action.messageIDs = state.getState().chatReducer.chats[
                action.chatID
            ].messageIDs;
            break;
    }
    return next(action);
};
export default messageMiddleware;

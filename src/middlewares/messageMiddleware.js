import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";

const messageMiddleware = state => next => action => {
    switch (action.type) {
        case SEND_MESSAGE:
            console.log(action);
            action.messageID = new Date().valueOf();
    }
    return next(action);
};
export default messageMiddleware;

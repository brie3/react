import { ADD_CHAT } from "../actions/chatActions";
import { sendMessage, SEND_MESSAGE } from "../actions/messageActions";
import { push } from "connected-react-router";

var botTimer = {};
const robotMiddleware = store => next => action => {
    switch (action.type) {
        case ADD_CHAT:
            clearTimeout(botTimer);
            botTimer = setTimeout(
                () => store.dispatch(send(action.chatID)),
                500
            );
            store.dispatch(push("/chats/" + action.chatID));
            break;
        case SEND_MESSAGE:
            if (action.payload.message.name === "Robot") {
                return next(action);
            }
            clearTimeout(botTimer);
            botTimer = setTimeout(
                () =>
                    store.dispatch(
                        send(action.chatID, action.payload.message.name)
                    ),
                1000
            );
            break;
    }
    return next(action);
};

function send(id, name) {
    sendMessage({
        chatID: id,
        name: "Robot",
        content: `Hello, human ${name}. I'm a robot from chat with ID ${id}.`
    });
}
export default robotMiddleware;

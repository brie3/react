import { sendMessage, addChat } from "../actions/chatActions";
import { push } from "connected-react-router";

var botTimer = {};
export const robotMiddleware = store => next => action => {
    if (
        action.type == sendMessage.toString() &&
        action.payload.message.name !== "Robot"
    ) {
        clearTimeout(botTimer);
        const { chatID, name } = action.payload.message;
        botTimer = setTimeout(
            () =>
                store.dispatch(
                    sendMessage({
                        chatID: chatID,
                        name: "Robot",
                        content: `Hello, human, ${name}. I'm a robot from chat with ID ${chatID}.`
                    })
                ),
            1000
        );
    }
    if (action.type == addChat.toString()) {
        clearTimeout(botTimer);
        const { chatID } = action.payload;
        botTimer = setTimeout(
            () =>
                store.dispatch(
                    sendMessage({
                        chatID: chatID,
                        name: "Robot",
                        content: `Hello, human. I'm a robot from chat with ID ${chatID}.`
                    })
                ),
            500
        );
        store.dispatch(push("/chats/" + chatID));
    }
    return next(action);
};

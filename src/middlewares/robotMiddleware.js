import { sendMessage } from "../actions/chatActions";

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
                        content: `Hello, human, ${name}. I'm a robot from chat ${chatID}`
                    })
                ),
            1000
        );
    }
    return next(action);
};

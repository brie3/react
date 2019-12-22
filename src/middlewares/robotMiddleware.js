import { sendMessage } from "../actions/chatActions";

const botTimers = [];
export const robotMiddleware = store => next => action => {
    if (
        action.type == sendMessage.toString() &&
        action.payload.message.name !== "Robot"
    ) {
        botTimers.forEach(timer => clearTimeout(timer));
        botTimers.length = 0;
        const { chatID, name } = action.payload.message;
        botTimers.push(
            setTimeout(
                () =>
                    store.dispatch(
                        sendMessage({
                            chatID: chatID,
                            name: "Robot",
                            content: `Hello, human, ${name}. I'm a robot from chat ${chatID}`
                        })
                    ),
                1000
            )
        );
    }
    return next(action);
};

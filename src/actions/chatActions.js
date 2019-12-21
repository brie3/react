import { createActions } from "redux-actions";

export const { loadChat, addChat, sendMessage } = createActions({
    "LOAD_CHAT": () => ({}),
    "ADD_CHAT": (title) => ({ title }),
    "SEND_MESSAGE": (chatID, message) => ({ chatID, message })
});
export const SEND_MESSAGE = "@@chat/SEND_MESSAGE";
export const DELETE_MESSAGE = "@@chat/DELETE_MESSAGE";
export const DELETE_MESSAGES = "@@chat/DELETE_MESSAGES";

export const sendMessage = (chatID, message) => ({
    type: SEND_MESSAGE,
    chatID,
    message
});
export const deleteMessage = (chatID, messageID) => ({
    type: DELETE_MESSAGE,
    chatID,
    messageID
});
export const deleteMessages = chatID => ({
    type: DELETE_MESSAGES,
    chatID
});

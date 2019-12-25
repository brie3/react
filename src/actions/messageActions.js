export const SEND_MESSAGE = "@@chat/SEND_MESSAGE";
export const DELETE_MESSAGE = "@@chat/DELETE_MESSAGE";

export const sendMessage = (chatID, messageID, message) => ({
    type: SEND_MESSAGE,
    chatID,
    messageID,
    message
});
export const deleteMessage = (chatID, messageID) => ({
    type: DELETE_MESSAGE,
    chatID,
    messageID
});

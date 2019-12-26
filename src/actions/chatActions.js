export const ADD_CHAT = "@@chat/ADD_CHAT";
export const DELETE_CHAT = "@@chat/DELETE_CHAT";
export const DELETE_CHATS = "@@chat/DELETE_CHATS";

export const addChat = (title, chatID = null) => ({
    type: ADD_CHAT,
    title,
    chatID
});
export const deleteChat = chatID => ({
    type: DELETE_CHAT,
    chatID
});
export const deleteChats = () => ({
    type: DELETE_CHATS
});

import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";
import { connectRouter } from "connected-react-router";

export default function(history) {
    return combineReducers({
        router: connectRouter(history),
        chat: chatReducer,
        profile: profileReducer
    });
}

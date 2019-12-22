import { createStore, applyMiddleware } from "redux";
import initReducer from "./reducers";
import reduxLogger from "redux-logger";
import { robotMiddleware } from "../src/middlewares/robotMiddleware";

export function initStore() {
    return createStore(
        initReducer,
        //reduxExtension,
        applyMiddleware(robotMiddleware, reduxLogger)
    );
}

/* const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : () => { } */

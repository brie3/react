import { createStore, applyMiddleware, compose } from "redux";
import initReducers from "./reducers";
// import reduxLogger from "redux-logger";
import { robotMiddleware } from "../src/middlewares/robotMiddleware";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { chatMiddleware } from "./middlewares/chatMiddleware";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "messenger",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["chatReducer", "profileReducer"]
};

export const history = createBrowserHistory();

function initStore() {
    const innitialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        innitialStore,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                chatMiddleware,
                robotMiddleware
                // reduxLogger
            )
            // reduxExtension
        )
    );
    const persistor = persistStore(store);
    return { store, persistor };
}

export default initStore;
/* const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : () => {}; */

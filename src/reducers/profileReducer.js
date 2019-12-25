import { LOAD_PROFILE } from "../actions/profileActions";

const defaultState = { profile: {} };

export default function profileReducer(state = defaultState, action) {
    switch (action.type) {
        case LOAD_PROFILE:
            return {
                profile: {
                    name: "Hello",
                    content: "World!"
                }
            };
        default:
            return state;
    }
}

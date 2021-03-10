import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {types} from "../action/types";
import {userReducer} from "../reducer/userReduer";
import {likeReducer} from "../reducer/likeReducer";

const appReducer = combineReducers({
    userReducer: userReducer,
    likeReducer: likeReducer,
});

const rootReducer = (state, action) => {
    if (action.type === types.DESTROY_STATE) {
        state = undefined;
    }

    return appReducer(state, action);
};

let composeEnhancers = compose;
if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;

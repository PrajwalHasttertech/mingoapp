import produce from "immer";
import {combineReducers} from "redux";

const {types} = require("../action/types");

const initialState = {
    byIds: {},
    user: {
        userId: [],
        page: 0,
        limit: 10,
        noMore: false,
        selectedIndex: -1,
    },
};

const userReducerById = produce((draft, action) => {
    switch (action.type) {
        case types.LoadUser:
            action.value.forEach((element) => {
                draft[element._id] = element;
            });
            break;
        case types.AddUser:
            action.value.forEach((element) => {
                draft[element._id] = element;
            });
            break;
    }
}, initialState.byIds);

const userReducerId = produce((draft, action) => {
    switch (action.type) {
        case types.LoadUser:
            draft.userId = action.value.map((element) => element._id);
            draft.page++;
            break;
        case types.AddUser:
            if (action.value.length == 0) {
                draft.noMore = true;
                break;
            } else {
                draft.userId = [
                    ...draft.userId,
                    ...action.value.map((element) => element._id),
                ];
                draft.page++;
                break;
            }

        case types.UpdateUser:
            draft = {...draft, ...action.value};

            return draft;
    }
}, initialState.user);

const userReducer = combineReducers({
    userReducerById,
    userReducerId,
});

export {userReducer};

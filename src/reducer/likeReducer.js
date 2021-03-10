import produce from "immer";
import {combineReducers} from "redux";

const {types} = require("../action/types");

const initialState = {
    byIds: {},
    like: false,
    user: {
        userId: [],
        page: 1,
        limit: 10,
        noMore: false,
        selectedIndex: -1,
    },
};

const updateLikeReducer = produce((draft, action) => {
    switch (action.type) {
        case types.UpdateLike:
            draft = action.value;
            break;
    }
}, initialState.like);

const likeReducerById = produce((draft, action) => {
    console.log("likeReducerById", action);
    switch (action.type) {
        case types.LoadLikeUser:
            action.value.forEach((element) => {
                draft[element._id] = element;
            });
            break;
        case types.AddLikeUser:
            action.value.forEach((element) => {
                draft[element._id] = element;
            });
            break;
        case types.UpdateLikeUser:
            draft = {};
            return draft;
    }
}, initialState.byIds);

const likeReducerId = produce((draft, action) => {
    console.log("likeReducerId", action);
    switch (action.type) {
        case types.LoadLikeUser:
            if (action.value.length != 0) {
                if (action.value.length < 10) {
                    draft.noMore = true;
                }
                draft.userId = action.value.map((element) => element._id);
                draft.page++;
                break;
            } else {
                draft.noMore = true;
                break;
            }

        case types.AddLikeUser:
            if (action.value.length != 0) {
                if (action.value.length < 10) {
                    draft.noMore = true;
                }
                draft.userId = [
                    ...draft.userId,
                    ...action.value.map((element) => element._id),
                ];
                draft.page++;
                break;
            } else {
                draft.noMore = true;
                break;
            }

        case types.AddLikeUser | types.LoadLikeUser:

        case types.UpdateLikeUser:
            draft = {...draft, ...action.value};

            return draft;
    }
}, initialState.user);

const likeReducer = combineReducers({
    likeReducerById,
    likeReducerId,
    updateLikeReducer,
});

export {likeReducer};

import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comment": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        likeunlike(state, action) {
            const stat = state.find((status) =>
                status._id === action.payload._id
            );

            if(stat.liked) {
                stat.likes = stat.likes - 1;
                stat.liked = false;

            } else {
                stat.likes = stat.likes + 1;
                stat.liked = true;
            }
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {likeunlike, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
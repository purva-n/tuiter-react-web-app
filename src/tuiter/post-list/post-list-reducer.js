import { createSlice } from "@reduxjs/toolkit";
import postArray from "../data/post-list.json";

const postSlice = createSlice({
    name: "postsArray",
    initialState: postArray
});

export default postSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import postSumArray from "../data/posts-summary-list.json";

const postSumSlice = createSlice({
    name: "postSummary",
    initialState: postSumArray
});

export default postSumSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

const profile = {
        name: 'Purva Nartam', handle: 'nartamp',
        profilePicture: 'owner.png', 	bannerPicture: 'banner.jpg',
        bio: 'Student, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',	dateOfBirth: '1998-09-08',	dateJoined: '9/2021',
        followingCount: 340,	followersCount: 223,
        tuits: 1345
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        saveChange(state, action) {
            state.name = action.payload.name;
            state.bio = action.payload.bio
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {saveChange} = profileSlice.actions;
export default profileSlice.reducer;
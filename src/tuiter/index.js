import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import postListReducer from "./post-list/post-list-reducer";
import postSummaryListReducer from "./post-summary-list/post-summary-list-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import profileReducer from "./profile/profile-reducer";
import EditProfileComponent from "./edit-profile-component";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, posts: postListReducer, postsSummary: postSummaryListReducer, profile: profileReducer}
    });
function Tuiter() {
    return(
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active='explore'/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route index element={<ExploreComponent/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                    <Route path="/explore" element={<ExploreComponent/>}/>
                    <Route path="/profile" element={<ProfileComponent />} />
                    <Route path="/edit-profile" element={<EditProfileComponent />} />
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>

    );
}
export default Tuiter
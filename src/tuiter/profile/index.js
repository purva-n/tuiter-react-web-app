import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./index.css";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);

    let navigate = useNavigate();
    const editProfile = () => {
        navigate(`/tuiter/edit-profile`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-1"><a href="/tuiter/explore"><i className="fa fa-2x fa-arrow-left"></i></a></div>
                <div className="col-10">
                    <div className="fw-bold fs-3">{profile.firstName} {profile.lastName}</div>
                    <div className="fw-light fs-6">{profile.tuits} Tuits</div>
                </div>
            </div>
            <div className="wd-pictures">
                <img src={`/images/${profile.bannerPicture}`} alt="Banner" height="300px" width="100%"/>
                <img className="wd-profile" src={`/images/${profile.profilePicture}`} alt="Profile"/>
            </div>
            <div className="row">
                <div className="col-9"></div>
                <button className="col-3 btn btn-outline-dark wd-edit-profile mt-2 rounded-pill" onClick={editProfile}>Edit
                    Profile
                </button>
            </div>
            <div>
                <p><span className="fw-bold fs-3">{profile.firstName} {profile.lastName}</span> <br/><span
                    className="fw-light">{profile.handle}</span></p>
                <p className="fw-light">{profile.bio}</p>
            </div>
            <div className="row">
                <div className="col-4"><i className="fa fa-light fa-map-marker"></i> {profile.location}</div>
                <div className="col-4"><i className="fa-thin fa-birthday-cake"></i> {profile.dateOfBirth}</div>
                <div className="col-4"><i className="fa fa-light fa-calendar"></i> Joined {profile.dateJoined}</div>
            </div>
            <br/>
            <div className="row">
                <div className="col-4">
                    <p><span className="fw-bold">{profile.followersCount}</span> <span
                        className="fw-light">Followers</span></p>
                </div>
                <div className="col-4">
                    <p><span className="fw-bold">{profile.followingCount}</span> <span
                        className="fw-light">Following</span></p>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent
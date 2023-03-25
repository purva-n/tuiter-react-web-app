import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../profile/index.css"
const EditProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const profilePage = () => {
        navigate('/tuiter/profile');
    }

    const saveChanges = () => {

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-1"><i className="bi bi-x-lg" onClick={profilePage}></i></div>
                <div className="col-9">
                    <div className="fw-bold fs-3">Edit Profile</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-dark rounded-pill" onClick={saveChanges}>Save</button>
                </div>
            </div>
            <div className="wd-pictures">
                <img src={`/images/${profile.bannerPicture}`} alt="Banner" height="300px" width="100%"/>
                <img className="wd-profile" src={`/images/${profile.profilePicture}`} alt="Profile"/>
            </div>

            <form className="mt-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label> <br/>
                    <input id="name" type="text" className="form-control"
                           defaultValue={`${profile.firstName} ${profile.lastName}`}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">Bio</label> <br/>
                    <textarea id="bio" className="form-control"
                           defaultValue={`${profile.bio}`}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label"><i className="fa fa-light fa-map-marker"></i> Location </label> <br/>
                    <input id="location" className="form-control"
                              defaultValue={`${profile.location}`}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="website" className="form-label"> Website </label> <br/>
                    <input id="website" type="text" className="form-control"
                           defaultValue={`${profile.website}`}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"><i className="fa-thin fa-birthday-cake"></i> Birthday </label> <br/>
                    <input id="name" type="date" className="form-control"
                           defaultValue={`${profile.dateOfBirth}`}/>
                </div>
            </form>
        </div>
    );
}

export default  EditProfileComponent;
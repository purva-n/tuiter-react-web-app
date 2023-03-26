import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../profile/index.css";
import {saveChange} from "../profile/profile-reducer";
const EditProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    const [profileInfo, setProfileInfo] = useState(profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const profilePage = () => {
        setProfileInfo(profile);
        navigate('/tuiter/profile');
    }

    const saveChanges = (e) => {
        //e.preventDefault();
        dispatch(saveChange(profileInfo));
        navigate('/tuiter/profile');
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setProfileInfo((prev) => {
            return {...prev, [name]: val}
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-1"><i className="bi bi-x-lg" onClick={profilePage}></i></div>
                <div className="col-9">
                    <div className="fw-bold fs-3">Edit Profile</div>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-dark rounded-pill" onClick={saveChanges}>Save</button>
                </div>
            </div>
            <div className="wd-pictures">
                <img src={`/images/${profile.bannerPicture}`} alt="Banner" height="300px" width="100%"/>
                <img className="wd-profile" src={`/images/${profile.profilePicture}`} alt="Profile"/>
            </div>

            <form className="mt-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label> <br/>
                    <input id="name" name="name" type="text" className="form-control"
                           defaultValue={`${profile.name}`} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">Bio</label> <br/>
                    <textarea id="bio" name="bio" className="form-control"
                           defaultValue={`${profile.bio}`} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label"><i className="fa fa-light fa-map-marker"></i> Location </label> <br/>
                    <input id="location" name="location" className="form-control"
                              defaultValue={`${profile.location}`} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="website" className="form-label"> Website </label> <br/>
                    <input id="website" name="website" type="text" className="form-control"
                           defaultValue={`${profile.website}`}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"><i className="fa-thin fa-birthday-cake"></i> Birthday </label> <br/>
                    <input id="name" name="dateOfBirth" type="date" className="form-control"
                           defaultValue={`${profile.dateOfBirth}`} onChange={handleChange}/>
                </div>
            </form>
        </div>
    );
}

export default  EditProfileComponent;
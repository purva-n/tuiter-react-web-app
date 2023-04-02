import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = ({
                       tuit = {
                           "topic": "Artificial Intelligence is so ingained in our daily lives, even if we don't realize it. What exactly is it, though?",
                           "userName": "WebMD",
                           "handle": "WebMD",
                           "caption": "",
                           "time": "Jun 22",
                           "title": "",
                           "tuit": "The middle-aged woman who had HIV but has been in remission after receiving an umbilical cord stem cell transplant more than five years ago for her leukemia is now considered “possibly cured.",
                           "image": "webmdlogo.svg",
                           "comment": "4K",
                           "retuits": "22K",
                           "likes": "12K",
                           "liked": true,
                       }
                   }) => {

    const dispatch = useDispatch();

    const likeunlikepost = (tuit) => {
        let updateTuit = {};
        if(!tuit.liked) {
            updateTuit = {
                ...tuit,
                likes: tuit.likes + 1,
                liked: true
            };
        }else {
            updateTuit = {
                ...tuit,
                likes: tuit.likes - 1,
                liked: false
            };
        }

        dispatch(updateTuitThunk(updateTuit))
    }

    return(
        <div className="row wd-info mt-2">
            <div className="col-3"><i className="fa fa-thin fa-comment"> </i> {tuit.comment}</div>
            <div className="col-3"><i className="fa fa-thin fa-retweet"> </i> {tuit.retuits}</div>
            <div className="col-3" id="like" onClick={() => likeunlikepost(tuit)}><i className={`fa fa-thin fa-heart ${tuit.liked ? "fa_red" : ""}`}></i> {tuit.likes}</div>
            <div className="col-3"><i className="fa fa-thin fa-share"></i></div>
        </div>
    )
};

export default TuitStats;
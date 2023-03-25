import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitListItem = ({
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
    <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img alt="profileImg" className="wd-display-pic" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10 ml-2">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span>{tuit.userName}</span>
                        <span className="wd-info"><i><i className="fas fa-check-circle"></i> @{tuit.handle} </i>  - {tuit.time}</span> <br/>
                        {/*<span> <i className="bi bi-x-lg float-end"*/}
                        {/*          onClick={() => deleteTuitHandler(post._id)}></i> </span>*/}
                        <span>{tuit.tuit}</span>
                    </div>
                    <TuitStats key={tuit._id} tuit={tuit} />
                </div>
            </div>
        </li>
    )
};

export default TuitListItem;
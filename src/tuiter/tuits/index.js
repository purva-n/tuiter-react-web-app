import React from "react";
import {useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
const TuitList = () => {
    const tuitItems = useSelector((state) => state.tuits);
    return(
        <div>
            <ul className="list-group">
                {
                    tuitItems.map(post =>
                        <TuitListItem key={post._id} tuit={post}/> )
                }
            </ul>
        </div>
    )
};

export default TuitList;
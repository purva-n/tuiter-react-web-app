import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitListItem from "./tuit-list-item.js";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector((state) => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <div>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuits.map(post =>
                        <TuitListItem key={post._id} tuit={post}/> )
                }
            </ul>
        </div>
    )
};

export default TuitList;
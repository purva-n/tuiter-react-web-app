import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-list-item.js";
    
const PostSummaryList = () => {
    const postsArray = useSelector(state => state.postsSummary)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;
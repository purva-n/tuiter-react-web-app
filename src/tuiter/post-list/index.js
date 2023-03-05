import React from "react";
import postItems from "./postItems.json";
import PostListItem from "./post-list-item";
const PostList = () => {
    return(
        <div>
            <ul className="list-group">
                {
                    postItems.map(post =>
                        <PostListItem key={post._id}post={post}/> )
                }
            </ul>
        </div>
    )
};

export default PostList;
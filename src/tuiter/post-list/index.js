import React from "react";
import {useSelector} from "react-redux";
import PostListItem from "./post-list-item";
const PostList = () => {
    const postItems = useSelector((state) => state.posts);
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
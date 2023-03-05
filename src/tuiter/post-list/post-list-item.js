import React from "react";

const PostListItem = ({
                          post = {
                              "topic": "Artificial Intelligence is so ingained in our daily lives, even if we don't realize it. What exactly is it, though?",
                              "userName": "WebMD",
                              "handle": "WebMD",
                              "caption": "",
                              "time": "Jun 22",
                              "title": "",
                              "image": "webmd.jpg",
                              "comment": "4K",
                              "retweets": "22K",
                              "likes": "12K",
                              "profileImg": "webmdlogo.svg"
                          }
                      }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img alt="profileImg" className="wd-display-pic" src={`/images/${post.profileImg}`}/>
                </div>
                <div className="col-11 ml-2">
                    <div>
                        <span>{post.userName}</span>
                        <span className="wd-info"><i><i
                            className="fas fa-check-circle"></i> @{post.handle} </i>  - {post.time}
                    </span> <br/>
                        <span>{post.topic}</span>
                    </div>
                    <div className="card border-2 border-light ml-2" id="post">
                        <img alt="postimage" className="card-img-top" src={`/images/${post.image}`} width={100}/>
                        <div className="card-body">
                            <span>{post.caption_title ? post.caption_title : ''}</span><br/>
                            <span className="wd-info">{post.caption ? post.caption : ''}</span>
                        </div>
                    </div>
                    <div className="row wd-info mt-2">
                        <div className="col-3"><i className="fa fa-thin fa-comment"> {post.comment}</i></div>
                        <div className="col-3"><i className="fa fa-thin fa-retweet"> {post.retweets}</i></div>
                        <div className="col-3"><i className="fa fa-thin fa-heart"> {post.likes}</i></div>
                        <div className="col-3"><i className="fa fa-thin fa-upload"></i></div>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default PostListItem;
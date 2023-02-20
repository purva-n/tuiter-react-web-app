import {hide} from "./index.js";

const PostItem = (post) => {
    return(`
    <li class="list-group-item"> 
        <div class="row">
            <div class="col-1">
                <img class="wd-display-pic" src="${post.profileImg}" />
            </div>
            <div class="col-11 ml-2">
                <div>
                    <span>${post.userName}</span> 
                    <span class="wd-info"><i><i class="fas fa-check-circle"></i> @${post.handle} </i>  - ${post.time}
                    </span> <br/>
                    <span>${post.topic}</span>
                </div>
                <div class="card border-2 border-light ml-2" id="post">
                    <img class="card-img-top" src="${post.image}" style="width: 100%" />
                    <div class="card-body" id="cardbody">
                        <span>${post.caption_title ? post.caption_title : ''}</span><br/>
                        <span class="wd-info">${post.caption ? post.caption :'' }</span>
                    </div>
                </div>
                <div class="row wd-info mt-2">
                    <div class="col-3"><i class="fa fa-thin fa-comment"> ${post.comment}</i></div>
                    <div class="col-3"><i class="fa fa-thin fa-retweet"> ${post.retweets}</i></div>
                    <div class="col-3"><i class="fa fa-thin fa-heart"> ${post.likes}</i></div>
                    <div class="col-3"><i class="fa fa-thin fa-upload"></i></div>
                </div>
            </div>
        </div>
    </li>
    `)
}

export default PostItem;
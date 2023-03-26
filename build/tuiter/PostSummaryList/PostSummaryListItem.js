const PostSummaryListItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <span class="wd-info">${post.topic}</span><br/>
                    <span>${post.userName}</span> <span class="wd-info"><i><i class="fas fa-check-circle"></i> - ${post.time}</i></span> <br/>
                    <span>${post.title}</span>
                </div>
                <div class="col-3">
                    <img src="${post.image}" width="100px" height="100px" />
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryListItem;
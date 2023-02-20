const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row mt-2">
            <div class="d-none d-md-inline col-md-2">
                <img src="${who.avatarIcon}" class="wd-display-pic" />
            </div>
            <div class="d-none d-md-inline col-md-6">
                <span class="text-start font-weight-bold">${who.userName}</span> <br/>
                <span class="text-start">@${who.handle}</span>
            </div>
            <div class="d-none d-md-inline col-md-4">
                <button class="btn btn-primary rounded-pill">Follow</button>
            </div>
        </div>
        </li>
    `)
}

export default WhoToFollowListItem;
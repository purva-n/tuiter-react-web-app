import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
    <ul class="list-group">
       <li class="list-group-item"> Who to follow </li>
       ${
            who.map(whotofollow => {
                return(WhoToFollowListItem(whotofollow))
            }).join('')     
        }
    </ul>
    `);
}

export default WhoToFollowList;
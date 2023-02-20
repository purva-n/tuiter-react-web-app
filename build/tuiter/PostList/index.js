import PostItem from "./PostItem.js";
import postItems from "./postItems.js";
const PostList = () => {
    return(`
        <div>
            <ul class="list-group">
                ${
                    postItems.map(postItem => {
                        return(PostItem(postItem))
                    }).join('')
                }
            </ul>
        </div>
    `)
}

export function hide() {
    const cardbody = $('#cardbody');
    cardbody.hide();
}

export default PostList;
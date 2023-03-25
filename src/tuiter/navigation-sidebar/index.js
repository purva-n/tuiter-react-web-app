import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
    <div className="list-group">
        <Link to="/tuiter/home" className="list-group-item">Tuiter</Link>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}> <i className="fa fa-home"></i> Home</Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}> <i className="fa fa-hashtag"></i> Explore</Link>
        <Link to="/" className="list-group-item">Labs</Link>
        <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}><i className="fa fa-bell"></i> Notifications</Link>
        <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}><i className="fa fa-envelope"></i> Messages</Link>
        <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}><i className="fa fa-bookmark"></i> Bookmarks</Link>
        <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}><i className="fa fa-list-ul"></i> Lists</Link>
        <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}><i className="fa fa-user"></i> Profile</Link>
        <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}><i className="fa fa-ellipsis-h"></i> More</Link>
    </div>);
};
export default NavigationSidebar;
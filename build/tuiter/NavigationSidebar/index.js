const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" id="home" ${isActive(active)}  href="../HomeScreen/index.html">
       <i class="fa fa-home"></i> Home</a>
     <a class="list-group-item" id="explore" ${isActive(active)} href="../ExploreScreen/index.html">
       <i class="fa fa-hashtag"></i> Explore</a>
     <a class="list-group-item" id="notifications" ${isActive(active)} href="/">
      <i class="fa fa-bell"></i> Notifications</a>
     <a class="list-group-item" id="messages" ${isActive(active)} href="/">
      <i class="fa fa-envelope"></i> Messages</a>
     <a class="list-group-item" id="bookmarks" ${isActive(active)} href="../bookmarks/index.html">
       <i class="fa fa-bookmark"></i> Bookmarks</a>
     <a class="list-group-item" id="lists" ${isActive(active)} href="/">
       <i class="fa fa-list"></i> Lists</a>
     <a class="list-group-item" id="profile" ${isActive(active)} href="../profile.html">
       <i class="fa fa-user"></i> Profile</a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

function isActive(active) {
    switch (active) {
        case 'home':  $('#home').addClass('active'); break;
        case 'explore':  $('#explore').addClass('active'); break;
        case 'notifications':  $('#notifications').addClass('active'); break;
        case 'messages':  $('#messages').addClass('active'); break;
        case 'bookmarks':  $('#bookmarks').addClass('active'); break;
        case 'lists':  $('#lists').addClass('active'); break;
        case 'profile':  $('#profile').addClass('active'); break;
    }
}
export default NavigationSidebar;
const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a id="home" class="list-group-item ${isActive(active)}"   href="../homescreen/index.html">
       <i class="fa fa-home"></i> Home</a>
     <a id="explore" class="list-group-item ${isActive(active)}"  href="../explorescreen/index.html">
       <i class="fa fa-hashtag"></i> Explore</a>
     <a id="notifications" class="list-group-item ${isActive(active)}" href="/">
      <i class="fa fa-bell"></i> Notifications</a>
     <a id="messages" class="list-group-item ${isActive(active)}"  href="/">
      <i class="fa fa-envelope"></i> Messages</a>
     <a id="bookmarks" class="list-group-item ${isActive(active)}"  href="../bookmarks/index.html">
       <i class="fa fa-bookmark"></i> Bookmarks</a>
     <a id="lists" class="list-group-item ${isActive(active)}"  href="/">
       <i class="fa fa-list"></i> Lists</a>
     <a id="profile" class="list-group-item ${isActive(active)}" href="../profile.html">
       <i class="fa fa-user"></i> Profile</a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
   ${isActive(active)}
 `);
}

function isActive(active) {
    const homeActive =  $('#home').attr('id') === active;
    const exploreActive =  $('#explore').attr('id') === active;
    const notificationsActive =  $('#notifications').attr('id') === active;
    const messagesActive =  $('#messages').attr('id') === active;
    const bookmarksActive =  $('#bookmarks').attr('id') === active;
    const listsActive =  $('#lists').attr('id') === active;
    const profileActive =  $('#profile').attr('id') === active;


    switch (true) {
        case homeActive: return 'active';
        case exploreActive:  return 'active';
        case notificationsActive:  return 'active';
        case messagesActive: return 'active';
        case listsActive:  return 'active';
        case profileActive:  return 'active';
        case bookmarksActive:  return 'active';
        default: return '';
    }
}
export default NavigationSidebar;
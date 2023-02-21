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
 `);
}

function isActive(active) {
    const home = $('#home').attr('id');
    console.log(home);
   switch(active) {
       // eslint-disable-next-line no-undef
       case $('#home').attr('id'): console.log('active'); return 'active';
       case $('#explore').attr('id'): return 'active';
       case $('#notifications').attr('id'): return 'active';
       case $('#messages').attr('id'): return 'active';
       case $('#bookmarks').attr('id'): return 'active';
       case $('#lists').attr('id'): return 'active';
       case $('#profile').attr('id'): return 'active';
       default: return '';
   }
}
export default NavigationSidebar;
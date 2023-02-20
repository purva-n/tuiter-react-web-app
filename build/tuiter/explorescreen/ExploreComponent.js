import PostSummaryList from "../PostSummaryList/index.js";
import SearchBar from "../SearchBar/SearchBar.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11">
               ${SearchBar()}
            </div>
            <div class="col-1 wd-cog">
                <a href="explore-settings.html" class="fas fa-cog fa-2x text-decoration-none"></a>
            </div>
        </div>
        <div class="mt-2">
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item wd-active">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>
        <div class="card">
            <img src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" style="width: 100%" />
        </div>
        
        <div>
            ${PostSummaryList()}
        </div>
            
    `);
}
export default ExploreComponent;

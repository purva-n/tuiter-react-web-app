const SearchBar = () => {
    return(`
        <label for="search-tuiter" class="form-label w-100 mb-0">
            <div class="input-group">
                    <span class="input-group-text border-end-0 rounded-end rounded-pill">
                        <i class="fas fa-search"></i>
                    </span>
                <input type="text" id="search-tuiter" class="form-control border-start-0 rounded-start rounded-pill"
                       placeholder="Search Tuiter">
            </div>
        </label> 
    `)
}

export default SearchBar;
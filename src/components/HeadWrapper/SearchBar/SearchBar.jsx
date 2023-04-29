import Style from './SearchBar.module.css'

function SearchBar() {
    return(
        <input type="text" className={Style.searchBar}></input>
    )
}

export default SearchBar
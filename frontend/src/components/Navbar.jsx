export default function Navbar({searchField, searchTypeAction, searchTypeName, username, saved, logout}) {
  return (
    <nav>
      <div className="inline-centering">
        <span className="logo-icon"></span>
        <span className="logo-text">Browse Restaurants</span>
      </div>
      <input className="search-box" type="text" placeholder="Type anything to search...." onChange={searchField}/>
      <div>
        <label className="filter-select">Filtering By : </label>
        <button className="filter-button" onClick={searchTypeAction}>{searchTypeName}</button>
      </div>
      <div className="dropdown">
        <div className="inline-centering">
          <i id="icon" className="fa fa-user-circle"></i>
          <span>{username}</span>
        </div>
        <div className="dropdown-list">
          <p onClick={saved}>Saved Restaurants</p>
          <p onClick={logout}>Logout</p>
        </div>
      </div>
    </nav>
  )
}
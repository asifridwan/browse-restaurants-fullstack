export default function Navbar({searchField, searchTypeAction, searchTypeName}) {
  return (
    <nav>
      <div className="nav-centering">
        <span className="logo-icon"></span>
        <span className="logo-text">Browse Restaurants</span>
      </div>
      <input className="search-box" type="text" placeholder="Type anything to search...." onChange={searchField}/>
      <div>
        <label className="filter-select">Filtering By : </label>
        <button className="filter-button" onClick={searchTypeAction}>{searchTypeName}</button>
      </div>
      <div className="dropdown">
        <div className="nav-centering">
          <i id="icon" className="fa fa-user-circle"></i>
          <span>Username</span>
        </div>
        <div className="dropdown-list">
          <p>Saved Restaurants</p>
          <p>Logout</p>
        </div>
      </div>
    </nav>
  )
}
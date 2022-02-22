export default function Navbar() {
  return (
    <nav>
      <div className="nav-centering">
        <span className="logo-icon"></span>
        <span className="logo-text">Browse Restaurants</span>
      </div>
      <input className="search-box" type="text" placeholder="Type anything to search...."/>
      <div>
        <label htmlFor="" className="filter-select">Filter By : </label>
        <select name="" id="" className="filter-type">
          <option value="">Name</option>
          <option value="">Date and Time</option>
        </select>
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
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img className="logo-img" src={logo} alt="" />
        <span className="logo-text">Browse Restaurants</span>
      </div>
      <div>
        <input className="search-box" type="text" placeholder="Enter Name, Date or Time..."/>
        <button className="search-button">Search</button>
      </div>
      <div>
        <label htmlFor="" className="filter-select">Filter By : </label>
        <select name="" id="" className="filter-type">
          <option value="">Name</option>
          <option value="">Date and Time</option>
        </select>
      </div>
    </nav>
  )
}
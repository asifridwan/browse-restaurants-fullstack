export default function Navbar() {
  return (
    <nav>
        <span className="logo">Browse Restaurants</span>
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
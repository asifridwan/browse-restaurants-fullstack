export default function Restaurant({name, timetable, add}) {
  return (
    <div className="restaurant-box">
      <p className="restaurant-name">{name}</p>
      <div className="timetable-centering">
        <i id="icon" className="fa fa-calendar-check-o"></i>
        <p className="restaurant-timetable">{timetable}</p>
      </div>
      <div className="add-remove-button-centering">
        <button className="add-remove-button" onClick={add}><i className="fa fa-plus"></i> Add To Saved Restaurants</button>
        {/* <button className="add-remove-button"><i className="fa fa-times"></i> Remove From Saved Restaurants</button> */}
      </div>
    </div>
  )
}
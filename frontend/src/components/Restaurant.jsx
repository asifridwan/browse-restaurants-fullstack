export default function Restaurant({name, timetable}) {
  return (
    <div className="restaurants-content">
      <p className="restaurant-name">{name}</p>
      <p className="timetable-centering">
        <i id="icon" className="fa fa-calendar-check-o"></i>
        <div className="restaurant-timetable">{timetable}</div>
      </p>
      <div className="add-button-centering">
        <button className="add-button"><i className="fa fa-plus"></i> Add To Named Collection</button>
      </div>
    </div>
  )
}
export default function Restaurant({id, name, timetable, SendRestaurantID, canAdd, canRemove}) {
  const restaurantID = id;

  return (
    <div className="restaurant-box">
      <p className="restaurant-name">{name}</p>
      <div className="timetable-centering">
        <i id="icon" className="fa fa-calendar-check-o"></i>
        <p className="restaurant-timetable">{timetable}</p>
      </div>
      <div className="add-remove-button-centering">
        {canAdd && <button className="add-remove-button" onClick={() => SendRestaurantID(restaurantID)}><i className="fa fa-plus"></i> Add To Saved Restaurants</button>}
        {canRemove && <button className="add-remove-button" onClick={() => SendRestaurantID(restaurantID)}><i className="fa fa-times"></i> Remove From Saved Restaurants</button>}
      </div>
    </div>
  )
}
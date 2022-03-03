import LoadingSpinner from "./LoadingSpinner";
import Restaurant from "./Restaurant";

export default function RestaurantsList({data, PassRestaurantID}) {
  const SendRestaurantID = (id) => {
    PassRestaurantID(id);
  }

  return (
    <section>
      {data.length === 0 && <LoadingSpinner />}
      <div className="browse-restaurants-list">
        {data.length > 0 && data.map((item, i) => {
          return <Restaurant key={i} id={item.id} name={item.name} timetable={item.timetable} SendRestaurantID={SendRestaurantID} canAdd={true} />
        })}
      </div>
    </section>
  )
}
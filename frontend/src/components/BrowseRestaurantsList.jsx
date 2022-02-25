import LoadingSpinner from "./LoadingSpinner";
import Restaurant from "./Restaurant";

export default function BrowseRestaurantsList({data}) {
  return (
    <section>
      {data.length === 0 && <LoadingSpinner />}
      <div className="browse-restaurants-list">
        {data.length > 0 && data.map((item, i) => {
          return <Restaurant key={i} name={data[i].name} timetable={data[i].timetable} />
        })}
      </div>
    </section>
  )
}
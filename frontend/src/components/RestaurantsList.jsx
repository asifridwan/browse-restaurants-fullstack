import Restaurant from "./Restaurant";

export default function RestaurantsList({data}) {
  return (
    <section>
      {data.length === 0 && <div className="loading-container"><div className="loading-animation"></div></div>}
      <div className="restaurants-list">
        {data.length > 0 && data.map((item, i) => {
          return <Restaurant key={i} name={data[i].name} timetable={data[i].timetable} />
        })}
      </div>
    </section>
  )
}
import { useEffect, useState } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";

export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/restaurants').then(res => setRestaurants(res.data))
  }, [])

  return (
    <section>
      {/* <div className="no-restaurants">No Restaurants Found</div> */}
      <div className="restaurants-list">
        {restaurants.length > 0 && restaurants.map((item, i) => {
          return <Restaurant name={restaurants[i].name} timetable={restaurants[i].timetable} />
        })}
      </div>
    </section>
  )
}
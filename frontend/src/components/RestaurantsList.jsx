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
      {restaurants.length === 0 && <div className="loading-container"><div className="loading-animation"></div></div>}
      <div className="restaurants-list">
        {restaurants.length > 0 && restaurants.map((item, i) => {
          return <Restaurant key={i} name={restaurants[i].name} timetable={restaurants[i].timetable} />
        })}
      </div>
    </section>
  )
}
import { useEffect, useState } from "react";
import axios from "axios";

import Restaurant from "./Restaurant";

export default function Collection({id, name, PassRestaurantID, RenameCollectionID, DeleteCollectionID}) {
  const [restaurants, setRestaurants] = useState([]);
  const collectionID = id;

  useEffect(() => {
    axios.get(`http://localhost:4000/saved/${id}`).then(res => setRestaurants(res.data))
  }, [id]);

  const SendRestaurantID = (id) => {
    PassRestaurantID(id);
  }

  return (
  <div className="collection-container">
        <div className="collection-id">
          <span className="collection-name">{name}</span>
          <span className="collection-options" onClick={() => RenameCollectionID(collectionID)}><i className="fa fa-eraser"></i> Rename</span>
          <span className="collection-options" onClick={() => DeleteCollectionID(collectionID)}><i className="fa fa-trash"></i> Delete</span>
        </div>
        <div className="savedlists-collections">
          {restaurants.length > 0 && restaurants.map((item, i) => {
            return <Restaurant key={i} id={item.id} name={item.name} timetable={item.timetable} SendRestaurantID={SendRestaurantID} canRemove={true} />
          })}
        </div>
    </div>
  )
}
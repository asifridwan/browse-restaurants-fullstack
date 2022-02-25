import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import BrowseRestaurantsList from "../components/BrowseRestaurantsList";

export default function BrowseRestaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('Name');

    useEffect(() => {
        axios.get('http://localhost:4000/restaurants').then(res => setRestaurants(res.data))
    }, []);

    const onSearchField = e => {
        setSearchTerm(e.target.value);
    }

    function settingSearchType() {
        if(searchType === 'Name') {
          setSearchType('Date and Time')
        }
        else {
          setSearchType('Name')
        }
    }

    const filterRestaurantsByName = restaurants.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    });

    const filterRestaurantsByDateAndTime = restaurants.filter(item => {
        return item.timetable.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return(
        <div>
            <Navbar searchField={onSearchField} searchTypeAction={settingSearchType} searchTypeName={searchType} />
            {searchType === 'Name' && <BrowseRestaurantsList data={filterRestaurantsByName} />}
            {searchType === 'Date and Time' && <BrowseRestaurantsList data={filterRestaurantsByDateAndTime} />}
        </div>
    )
}
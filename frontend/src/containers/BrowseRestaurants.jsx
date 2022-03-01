import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import BrowseRestaurantsList from "../components/BrowseRestaurantsList";
import AddModal from "../components/AddModal";

export default function BrowseRestaurants({username, onSaved, onLogout}) {
    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchByName, setSearchByName] = useState(true);
    const [showBrowse, setShowBrowse] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/restaurants').then(res => setRestaurants(res.data))
    }, []);

    function SettingSearchType(e) {
        if (e.target.value === 'timetable') {
            setSearchByName(false);
        }
        else {
            setSearchByName(true);
        }
    }

    function ShowAdd() {
        setShowBrowse(false);
        setShowAddModal(true);
    }

    function CancelAdd() {
        setShowAddModal(false);
        setShowBrowse(true);
    }

    const filterRestaurantsByName = restaurants.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    });

    const filterRestaurantsByDateAndTime = restaurants.filter(item => {
        return item.timetable.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return(
        <>
            {showBrowse && <div>
                <Navbar searchField={e => setSearchTerm(e.target.value)} searchTypeAction={SettingSearchType} username={username} saved={onSaved} logout={onLogout} />
                {searchByName ? <BrowseRestaurantsList data={filterRestaurantsByName} add={ShowAdd} /> : <BrowseRestaurantsList data={filterRestaurantsByDateAndTime} add={ShowAdd} />}
            </div>}
            {showAddModal && <AddModal confirm={CancelAdd} cancel={CancelAdd} />}
        </>
    )
}
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import RestaurantsList from "../components/RestaurantsList";
import AddModal from "../components/AddModal";

export default function BrowseRestaurants({username, onSaved, onLogout}) {
    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchByName, setSearchByName] = useState(true);
    const [showBrowse, setShowBrowse] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [userID, setUserID] = useState('');
    const [restaurantID, setRestaurantID] = useState();
    const [collectionName, setCollectionName] = useState('');
    const [collectionID, setCollectionID] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/restaurants').then(res => setRestaurants(res.data))
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${username}`).then(res => setUserID(res.data[0].id))
    }, [username]);

    function SettingSearchType(e) {
        if (e.target.value === 'timetable') {
            setSearchByName(false);
        }
        else {
            setSearchByName(true);
        }
    }

    function ShowAdd(id) {
        setShowBrowse(false);
        setRestaurantID(id);
        setShowAddModal(true);
    }

    function CloseAdd() {
        setShowAddModal(false);
        setShowBrowse(true);
        setCollectionID('');
        setCollectionName('');
        setErrorMessage('');
    }

    function SettingCollectionID(e) {
        setCollectionID(e.target.value);
    }

    function ConfirmAdd() {
        axios.post('http://localhost:4000/add', {
            name: collectionName,
            old_id: collectionID,
            user_id: userID,
            res_id: restaurantID,
        }).then(response => {
            if (response.data === 'Success') {
                CloseAdd();
            }
            else {
                setErrorMessage(response.data);
            }
        });
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
                {searchByName ? <RestaurantsList data={filterRestaurantsByName} PassRestaurantID={ShowAdd} /> : <RestaurantsList data={filterRestaurantsByDateAndTime} PassRestaurantID={ShowAdd} />}
            </div>}
            {showAddModal && <AddModal userid={userID} collectionName={e => setCollectionName(e.target.value)} collectionID={SettingCollectionID} errorMessage={errorMessage} confirm={ConfirmAdd} cancel={CloseAdd} />}
        </>
    )
}
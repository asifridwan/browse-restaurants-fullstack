import { useEffect, useState } from "react";
import axios from "axios";

import BrowseRestaurants from "./BrowseRestaurants";
import Saved from "./Saved";

export default function MainApp({username, onLogout}) {
    const [showBrowse, setShowBrowse] = useState(true);
    const [showSaved, setShowSaved] = useState(false);
    const [userID, setUserID] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${username}`).then(res => setUserID(res.data[0].id))
    }, [username]);

    function switchToSaved() {
        setShowBrowse(false);
        setShowSaved(true);        
    }

    function switchToBrowse() {
        setShowSaved(false);
        setShowBrowse(true);
    }

    return (
        <div>
            {showBrowse && <BrowseRestaurants username={username} userID={userID} onSaved={switchToSaved} onLogout={onLogout} />}
            {showSaved && <Saved userID={userID} back={switchToBrowse} />}
        </div>
    )
}

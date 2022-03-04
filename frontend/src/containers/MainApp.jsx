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

    useEffect(() => {
        const browse_state = sessionStorage.getItem("browse-state");
        const saved_state = sessionStorage.getItem("saved-state");

        if (browse_state) {
            setShowBrowse(browse_state);
        }

        if (saved_state) {
            setShowSaved(saved_state);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("browse-state", JSON.stringify(showBrowse));
        sessionStorage.setItem("saved-state", JSON.stringify(showSaved));
    }, [showBrowse, showSaved]);

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
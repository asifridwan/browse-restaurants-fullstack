import { useEffect, useState } from "react";
import axios from "axios";

import CollectionList from "../components/CollectionList";
import RenameModal from "../components/RenameModal";
import DeleteModal from "../components/DeleteModal";

export default function Saved({userID, back}) {
    const [showSavedList, setShowSavedList] = useState(true);
    const [showRenameModal, setShowRenameModal] = useState(false);
    const [showCollectionDeleteModal, setShowCollectionDeleteModal] = useState(false);
    const [showRestaurantDeleteModal, setShowRestaurantDeleteModal] = useState(false);
    const [collections, setCollections] = useState([]);
    const [restaurantID, setRestaurantID] = useState();
    const [collectionID, setCollectionID] = useState('');
    const [collectionName, setCollectionName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/collections/${userID}`).then(res => setCollections(res.data))
    }, [userID, collectionName]);

    function CloseRename() {
        setShowRenameModal(false);
        setCollectionName('');
        setErrorMessage('');
        setShowSavedList(true);
    }

    function CloseDelete() {
        setShowCollectionDeleteModal(false);
        setShowRestaurantDeleteModal(false);
        setShowSavedList(true);
    }

    function ShowRename(id) {
        setShowSavedList(false);
        setCollectionID(id);
        setShowRenameModal(true);
    }

    function ShowDeleteCollection(id) {
        setShowSavedList(false);
        setCollectionID(id);
        setShowCollectionDeleteModal(true);
    }

    function ShowDeleteRestaurant(id) {
        setShowSavedList(false);
        setRestaurantID(id)
        setShowRestaurantDeleteModal(true);
    }

    function ConfirmRename() {
        axios.patch(`http://localhost:4000/rename/${collectionID}`, {
            name: collectionName
        }).then(response => {
            if (response.data === 'Success') {
                CloseRename();
            }
            else {
                setErrorMessage(response.data);
            }
        });
    }

    function ConfirmDeleteCollection() {
        axios.delete(`http://localhost:4000/collection/${collectionID}`).then(response => {
            if (response.data === 'Success') {
                CloseDelete();
            }
        });
    }

    function ConfirmDeleteRestaurant() {
        axios.delete(`http://localhost:4000/restaurant/${restaurantID}`).then(response => {
            if (response.data === 'Success') {
                CloseDelete();
            }
        });
    }

    return (
        <div>
            {showSavedList && <CollectionList data={collections} back={back} SendRestaurantID={ShowDeleteRestaurant} RenameCollID={ShowRename} DeleteCollID={ShowDeleteCollection} />}
            {showRenameModal && <RenameModal renameText={e => setCollectionName(e.target.value)} errorMessage={errorMessage} confirm={ConfirmRename} cancel={CloseRename} />}
            {showCollectionDeleteModal && <DeleteModal confirm={ConfirmDeleteCollection} cancel={CloseDelete} />}
            {showRestaurantDeleteModal && <DeleteModal confirm={ConfirmDeleteRestaurant} cancel={CloseDelete} />}
        </div>
    )
}
import { useState } from "react";

import SavedList from "../components/SavedList";
import RenameModal from "../components/RenameModal";
import DeleteModal from "../components/DeleteModal";

export default function Saved({back}) {
    const [showSavedList, setShowSavedList] = useState(true);
    const [showRenameModal, setShowRenameModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    function ShowRename() {
        setShowSavedList(false);
        setShowRenameModal(true);
    }

    function ShowDelete() {
        setShowSavedList(false);
        setShowDeleteModal(true);
    }

    function CancelRename() {
        setShowRenameModal(false);
        setShowSavedList(true);
    }

    function CancelDelete() {
        setShowDeleteModal(false);
        setShowSavedList(true);
    }

    return (
        <div>
            {showSavedList && <SavedList back={back} rename={ShowRename} del={ShowDelete} />}
            {showRenameModal && <RenameModal confirm={CancelRename} cancel={CancelRename} />}
            {showDeleteModal && <DeleteModal confirm={CancelDelete} cancel={CancelDelete} />}
        </div>
    )
}
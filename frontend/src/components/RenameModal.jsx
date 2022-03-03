export default function RenameModal({renameText, errorMessage, confirm, cancel}) {
  return (
    <div className="modal-background">
        <div className="modal-box rename-modal">
            <div className="header"><i className="fa fa-eraser"></i> Rename</div>
            {errorMessage && <p className="error-message"><i className="fa fa-exclamation-triangle"></i> {errorMessage}</p>}
            <div className="midsection">
                <div>Write a new name for your collection :</div>
                <input type="text" placeholder="New Name of the collection" onChange={renameText} />
            </div>
            <div className="footer">
                <button className="modal-button confirm" onClick={confirm}>Confirm</button>
                <button className="modal-button cancel" onClick={cancel}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
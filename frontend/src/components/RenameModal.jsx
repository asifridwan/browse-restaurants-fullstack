export default function RenameModal() {
  return (
    <div className="modal-background">
        <div className="modal-box rename-modal">
            <div className="header"><i className="fa fa-eraser"></i> Rename</div>
            <div className="midsection">
                <div>Write a new name for your collection :</div>
                <input type="text" placeholder="New Name of the collection" />
            </div>
            <div className="footer">
                <button className="modal-button confirm">Confirm</button>
                <button className="modal-button cancel">Cancel</button>
            </div>
        </div>
    </div>
  )
}
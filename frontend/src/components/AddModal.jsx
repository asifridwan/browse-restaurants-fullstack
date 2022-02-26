export default function AddModal() {
  return (
    <div className="modal-background">
        <div className="modal-box add-modal">
            <div className="header"><i className="fa fa-plus-circle"></i> Create or Choose</div>
            <div className="midsection">
              <div>Give your collection a name (e.g. Vegan Lovers) :</div>
              <input type="text" placeholder="Name of the collection" />
            </div>
            <div className="midsection">
              <label>Or choose a collection from an existing one :</label>
              <select name="" id="">
                <option value="">Name 1</option>
                <option value="">Name 2</option>
                <option value="">Name 3</option>
              </select>
            </div>
            <div className="footer">
                <button className="modal-button confirm">Confirm</button>
                <button className="modal-button cancel">Cancel</button>
            </div>
        </div>
    </div>
  )
}
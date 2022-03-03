import { useEffect, useState } from "react";
import axios from "axios";

export default function AddModal({userID, collectionName, collectionID, errorMessage, confirm, cancel}) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/collections/${userID}`).then(res => setCollections(res.data))
  }, [userID]);

  return (
    <div className="modal-background">
        <div className="modal-box add-modal">
            <div className="header"><i className="fa fa-plus-circle"></i> Create or Choose</div>
            {errorMessage && <p className="error-message"><i className="fa fa-exclamation-triangle"></i> {errorMessage}</p>}
            <div className="midsection">
              <div>Give your collection a name (e.g. Vegan Lovers) :</div>
              <input type="text" placeholder="Name of the collection" onChange={collectionName} />
            </div>
            {collections.length > 0 && <div className="midsection">
              <label>Or choose a one from an existing collection :</label>
              <select onChange={collectionID}>
                <option value="">Select from an existing</option>
                {collections.map((item, i) => {
                  return <option key={i} value={item.id}>{item.name}</option>
                })}
              </select>
            </div>}
            <div className="footer">
                <button className="modal-button confirm" onClick={confirm}>Confirm</button>
                <button className="modal-button cancel" onClick={cancel}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
export default function DeeleteModal({confirm, cancel}) {
  return (
    <div className="modal-background">
      <div className="modal-box delete-modal">
        <div className="header"><i className="fa fa-exclamation-circle"></i> Are You Sure ?</div>
        <div className="midsection">This action can't be undone</div>
        <div className="footer">
          <button className="modal-button delete" onClick={confirm}>Delete</button>
          <button className="modal-button cancel" onClick={cancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
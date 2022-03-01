import Restaurant from "./Restaurant";

export default function SavedList({back, rename, del}) {
  return (
    <div className="savedlist-container">
        <p onClick={back} className="go-back"><i className="fa fa-chevron-circle-left"></i> Go Back</p>
        <div className="collection-container">
            <div className="collection-id">
                <span className="collection-name">Sample Name</span>
                <span className="collection-options" onClick={rename}><i className="fa fa-eraser"></i> Rename</span>
                <span className="collection-options" onClick={del}><i className="fa fa-trash"></i> Delete</span>
            </div>
            <div className="savedlists-collections">
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
                <Restaurant name='Name' timetable='Everyday 9AM - 9PM' />
            </div>
        </div>
    </div>
  )
}
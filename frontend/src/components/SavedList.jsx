import Restaurant from "./Restaurant";

export default function SavedList() {
  return (
    <div className="savedlist-container">
        <p className="go-back"><i className="fa fa-chevron-circle-left"></i> Go Back</p>
        <div className="collection-container">
            <div className="collection-id">
                <span className="collection-name">Sample Name</span>
                <span className="collection-options"><i className="fa fa-eraser"></i> Rename</span>
                <span className="collection-options"><i className="fa fa-trash"></i> Delete</span>
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
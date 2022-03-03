import Collection from "./Collection";

export default function CollectionList({data, back, rename, del, SendRestaurantID, RenameCollID, DeleteCollID}) {
  const PassRestaurantID = (id) => {
    SendRestaurantID(id);
  }

  const RenameCollectionID = (id) => {
    RenameCollID(id);
  }

  const DeleteCollectionID = (id) => {
    DeleteCollID(id);
  }

  return (
    <div className="savedlist-container">
        <p onClick={back} className="go-back"><i className="fa fa-chevron-circle-left"></i> Go Back</p>
        {data.length > 0 && data.map((item, i) => {
          return <Collection key={i} id={item.id} name={item.name} rename={rename} del={del} PassRestaurantID={PassRestaurantID} RenameCollectionID={RenameCollectionID} DeleteCollectionID={DeleteCollectionID} />
        })}
    </div>
  )
}
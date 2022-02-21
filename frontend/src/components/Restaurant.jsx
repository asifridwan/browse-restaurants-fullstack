export default function Restaurant({name, timetable}) {
  return (
    <div className="restaurants-content">
      <div>{name}</div>
      <div>{timetable}</div>
    </div>
  )
}
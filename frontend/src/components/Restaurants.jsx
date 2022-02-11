import Result from "./Result";

export default function Restaurants() {
  return (
    <div className="result-section">
        <div className="heading">
            <div>Restaurant Name</div>
            <div>Date and Time</div>
        </div>
        <Result />
        <Result />
    </div>
  )
}
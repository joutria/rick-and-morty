import LocationInfo from "./LocationInfo";

function LocationContainer(props) {
  return (
    <div className="LocationContainer">
      Location:
      <LocationInfo info={props.info} />
    </div>
  );
}

export default LocationContainer;

import LocationInfo from "./LocationInfo";
import { memo } from "react";

function LocationContainer(props) {
  return (
    <div className="LocationContainer">
      Location:
      <LocationInfo info={props.info} />
    </div>
  );
}

export default memo(LocationContainer);

import { memo } from "react";

function LocationInfo(props) {
  return (
    <div className="LocationInfo">
      {props.info.name && <p>Name: {props.info.name}</p>}
      {props.info.dimension && <p>Dimension: {props.info.dimension}</p>}
      {props.info.type && <p>Type: {props.info.type}</p>}
      {props.info.residents && <p>Residents: {props.info.residents.length}</p>}
    </div>
  );
}

export default memo(LocationInfo);

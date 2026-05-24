import { memo } from "react";

function ResidentInfo(props) {
  return (
    <div className="ResidentInfo">
      {props.character.name && (
        <div className="resident-field">
          <span className="resident-label">Name:</span>
          <span className="resident-value">{props.character.name}</span>
        </div>
      )}
      {props.character.status && (
        <div className="resident-field">
          <span className="resident-label">Status:</span>
          <span className="resident-value">{props.character.status}</span>
        </div>
      )}
      {props.character.origin && (
        <div className="resident-field">
          <span className="resident-label">Origin:</span>
          <span className="resident-value">{props.character.origin.name}</span>
        </div>
      )}
      {props.character.episode && (
        <div className="resident-field">
          <span className="resident-label">Episodes:</span>
          <span className="resident-value">{props.character.episode.length}</span>
        </div>
      )}
    </div>
  );
}

export default memo(ResidentInfo);
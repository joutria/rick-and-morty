import { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";
import { memo } from "react";

function ResidentContainer(props) {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    props.fetcher(props.resident).then((data) => {
      setCharacter(data);
    });
  }, [props.resident, props.fetcher]);

  return (
    <>
      {props.value < props.page * 10 && props.value >= (props.page - 1) * 10 && (
        <div className="ResidentContainer" style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
          {character.image && <img src={character.image} alt={character.name || 'Resident'} />}
          <ResidentInfo character={character} />
        </div>
      )}
    </>
  );
}

export default memo(ResidentContainer);

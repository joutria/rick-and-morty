import { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

function ResidentContainer(props) {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    props.fetcher(props.resident).then((data) => {
      setCharacter(data);
    });
  }, [props.resident, props]);

  return (
    <>
      {props.value < props.page * 10 && props.value >= (props.page - 1) * 10 && (
        <div className="ResidentContainer">
          {character.image && <img src={character.image} />}
          <ResidentInfo character={character} />
        </div>
      )}
    </>
  );
}

export default ResidentContainer;

function ResidentInfo(props) {
    return (
      <div className="ResidentInfo">
       {props.character.name && <p>Name:<br/> {props.character.name}</p>}
       {props.character.status && <p>Status:<br/> {props.character.status}</p>}
       {props.character.origin && <p>Origin:<br/> {props.character.origin.name}</p>}
       {props.character.episode && <p>Episodes:<br/> {props.character.episode.length}</p>}
      </div>
    );
  }
  
  export default ResidentInfo;
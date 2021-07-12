import { useState, useEffect } from "react";

function SearchBox(props) {
  // list with suggestions
  const [suggestions, setSuggestions] = useState([]);
  // id of the location
  const [id, setId] = useState(1);

  // function to update the suggestions list
  const sugestionsHandler = (text) => {
    let matches = [];
    //regular expression to search for similar words as you are typing
    if (text.length > 0) {
      matches = props.list.filter((data) => {
        const formatter = text.replace(
          /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g,
          (x) => `\\${x}`
        );
        const regex = new RegExp(`${formatter}`, "gi");
        return data.match(regex);
      });
    }
    // assign matches to a state
    setSuggestions(matches);
  };

  // update the list of the different locations
  useEffect(() => {
    for (let i in props.list) {
      if (props.value == props.list[i]) {
        setId(i);
      }
    }
  }, [props.value, props.list]);

  // matches the name with the id of the location
  const idHandler = () => {
    if (id) {
      props
        .fetcher(`https://rickandmortyapi.com/api/location/${id}`)
        .then((data) => props.setInfo(data));
    }
  };

  return (
    <div className="SearchBox">
      <input
        placeholder="Type a location"
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
          sugestionsHandler(e.target.value);
          props.setPage(1);
        }}
      />

      {suggestions[0] && (
        <ul className="suggestions">
          {suggestions.map(
            (_, index) =>
              index < 4 &&
              suggestions[0] != props.value && (
                <li
                  key={index}
                  onClick={(e) => {
                    props.setValue(e.target.innerText);
                    sugestionsHandler(e.target.value);
                  }}
                >
                  {suggestions[index]}
                </li>
              )
          )}
        </ul>
      )}

      <button
        onClick={() => {
          idHandler();
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;

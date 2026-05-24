import { useState, useEffect } from "react";

function SearchBox(props) {
  // list with suggestions
  const [suggestions, setSuggestions] = useState([]);
  // id of the location
  const [id, setId] = useState(1);

  // function to update the suggestions list
  const suggestionsHandler = (text) => {
    let matches = [];
    // Only create regex if text is not empty and not just special characters
    if (text.length > 0) {
      const formatter = text.replace(
        /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g,
        (x) => `\\${x}`
      );
      if (formatter.length > 0) {
        try {
          const regex = new RegExp(`${formatter}`, "gi");
          matches = props.list.filter((data) => data.match(regex));
        } catch (e) {
          matches = [];
        }
      }
    }
    setSuggestions(matches);
  };

  // update the list of the different locations
  useEffect(() => {
    for (let i in props.list) {
      if (props.value === props.list[i]) {
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
      <div className="searchbox-input-wrapper" style={{ position: 'relative', flex: 1 }}>
        <input
          placeholder="Type a location"
          value={props.value}
          onChange={(e) => {
            props.setValue(e.target.value);
            suggestionsHandler(e.target.value);
            props.setPage(1);
          }}
        />
        {suggestions[0] && (
          <ul className="suggestions">
            {suggestions.map(
              (_, index) =>
                index < 4 &&
                suggestions[0] !== props.value && (
                  <li
                    key={index}
                    onClick={(e) => {
                      props.setValue(e.target.innerText);
                      suggestionsHandler(e.target.value);
                    }}
                  >
                    {suggestions[index]}
                  </li>
                )
            )}
          </ul>
        )}
      </div>
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

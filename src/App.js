import "./App.css";
import SearchBox from "./components/SearchBox";
import LocationContainer from "./components/LocationContainer";
import { useState, useEffect } from "react";
import ResidentContainer from "./components/ResidentContainer";

function App() {
  // value for the text input
  const [value, setValue] = useState("");
  // list of available locations
  const [list, setList] = useState("");
  // information about the location
  const [info, setInfo] = useState("");
  // number of buttons for the pages
  const [buttons, setButtons] = useState([]);
  // number of the page shown
  const [page, setPage] = useState(0);

  // app to fetch info from the api
  const fetcher = (url) => {
    return fetch(url).then((response) => response.json());
  };

  // effect to get the list with the names of the different locations
  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      fetcher(`https://rickandmortyapi.com/api/location?page=${i}`)
        .then((response) => response.results.map((object) => object.name))
        .then((data) => {
          setList((oldData) => oldData.concat(data));
        });
    }
    // parse from string to an array if necessary
    if (typeof list == "string") {
      setList(list.split(","));
    }
  }, []);

  // effect to assign the number of pages per location
  useEffect(() => {
    if (info) {
      let x = new Array(Math.ceil(info.residents.length / 10))
        .fill()
        .map((item, index) => {
          item = index + 1;
          return item;
        });
      setButtons(x);
    }
  }, [info]);

  // function to update page
  const pageHandler = (value) => {
    setPage(value);
  };

  // effect to randomly assign the initial location
  useEffect(() => {
    fetcher(
      `https://rickandmortyapi.com/api/location/${Math.floor(
        Math.random() * 102
      )}`
    ).then((data) => setInfo(data));
    setPage(1);
  }, []);

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <SearchBox
        value={value}
        setValue={setValue}
        list={list}
        fetcher={fetcher}
        setInfo={setInfo}
        setPage={setPage}
      />
      {info && <LocationContainer info={info} />}
      <div>
        {buttons &&
          buttons.map((item, index) => (
            <button
              onClick={(e) => {
                pageHandler(item);
              }}
              key={index}
            >
              {item}
            </button>
          ))}
      </div>
      <div className="residents">
        {info && (
          <>
            {info.residents.map((item, index) => (
              <ResidentContainer
                key={index}
                value={index}
                resident={item}
                fetcher={fetcher}
                page={page}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

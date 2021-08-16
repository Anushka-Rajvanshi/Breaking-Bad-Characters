import React, { useState, useEffect } from "react";
import Header from "./Header";
import AllResultPage from "./AllResultPage";
import SearchBar from "./SearchBar";
import axios from "axios";
import CharacterPage from "./CharacterPage";

function App() {
  const [dataItems, setDataItems] = useState([]);
  const [name, setName] = useState("");
  const [noResult, setNoResult] = useState(false);
  const [filter, setFilter] = useState("");
  const [loadAllResult, setLoadAllResult] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      setDataItems(result.data);
      result.data.length === 0 ? setNoResult(true) : setNoResult(false);
    };
    getData();
  }, [name]);

  useEffect(() => {
    const getFilteredData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?category=${filter}`
      );
      setDataItems(result.data);
    };
    getFilteredData();
  }, [filter]);

  return (
    <div>
      <Header />
      {loadAllResult && (
        <SearchBar
          getQuery={(query) => setName(query)}
          getFilter={(filter) => {
            setFilter(filter);
          }}
        />
      )}
      {loadAllResult ? (
        <AllResultPage
          items={dataItems}
          noResult={noResult}
          getCharacter={(character) => {
            setName(character);
            setLoadAllResult(false);
          }}
        />
      ) : (
        <CharacterPage
          data={dataItems}
          back={() => {
            setName("");
            setFilter("");
            setLoadAllResult(true);
          }}
        />
      )}
    </div>
  );
}

export default App;

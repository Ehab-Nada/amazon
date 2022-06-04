import Main from "./pages/Main";
import { useEffect, useState } from "react";
import MyContext from "./Store/store";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  const [Data, setData] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);
  const searchHandler = (s) => {
    setSearch(s);
  };
  return (
    <MyContext.Provider value={{ data: Data, searchValue: search }}>
      <SearchBar searchHandler={searchHandler} />
      <Main />
    </MyContext.Provider>
  );
}

export default App;

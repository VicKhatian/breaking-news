import { useEffect, useState } from "react";
import Articles from "../Articles";
import Hamburger from "../Hamburger";
import "./App.css";

function App() {
  const [query, setQuery] = useState("technology");

  const api = `https://gnews.io/api/v4/top-headlines?topic=${query}&lang=en&token=${process.env.REACT_APP_APIKEY}`;

  const [articles, setArticles] = useState();

  function updateQuery(text) {
    setQuery(text);
  }

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(api);
      const data = await response.json();

      setArticles(data.articles);
    }

    fetchArticles();
  }, []);

  return (
    <div className="App">
      <header className="App-header">News</header>
      <Hamburger updateQuery={updateQuery}></Hamburger>
      {articles && <Articles articles={articles}></Articles>}
    </div>
  );
}

export default App;

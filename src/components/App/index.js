import { useEffect, useState } from "react";
import Articles from "../Articles";
import Hamburger from "../Hamburger";
import Header from "../Header";
import "./App.css";

function App() {
  const [query, setQuery] = useState("technology");

  const [articles, setArticles] = useState();

  function updateQuery(text) {
    setQuery(text);
  }

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?topic=${query}&lang=en&token=${process.env.REACT_APP_APIKEY}`
      );
      const data = await response.json();

      setArticles(data.articles);
    }

    fetchArticles();
  }, [query]);

  function updateArticles(articles) {
    setArticles(articles);
  }

  return (
    <div className="App">
      <header className="App-header">News</header>
      <Hamburger updateQuery={updateQuery}></Hamburger>
      <Header updateArticles={updateArticles} />
      {articles && <Articles articles={articles}></Articles>}
    </div>
  );
}

export default App;

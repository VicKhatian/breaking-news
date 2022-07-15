import { useEffect, useState } from "react";
import Articles from "../Articles";
import "./App.css";

function App() {
  const api = `https://gnews.io/api/v4/top-headlines?topic=technology&lang=en&token=${process.env.REACT_APP_APIKEY}`;
  const [articles, setArticles] = useState([]);

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

      {articles && <Articles articles={articles}></Articles>}
    </div>
  );
}

export default App;

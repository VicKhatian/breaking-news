import React from "react";

function SecondaryArticle({article}) {
  return <div>
  <a href={article.url} target="_blank" rel="noreferrer">
    <div>
      <img src={article.image} alt={article.title} />
    </div>
    <div>
      <h1>{article.title}</h1>
    </div>;
  </a>
  </div>;
}

export default SecondaryArticle;

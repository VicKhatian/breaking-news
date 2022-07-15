import React from "react";

function MainArticle({ article }) {
  return (
    <div>
      <a href={article.url} target="_blank" rel="noreferrer">
        <div>
          <img src={article.image} alt={article.title} />
        </div>
        <div>
          <h1>{article.title}</h1>
          <h2>{article.description}</h2>
          <h2>{article.publishedAt}</h2>
        </div>
      </a>
    </div>
  );
}

export default MainArticle;

import React from "react";
import MainArticle from "./MainArticle";
import SecondaryArticle from "./SecondaryArticle";

function Articles({ articles }) {
  //a big article component
  //list of small article components
  return (
    <div>
      <div>Articles</div>
      <MainArticle article={articles[0]}></MainArticle>
      <SecondaryArticle article={articles[1]}></SecondaryArticle>
      {articles.slice(1).map((article, index) => 
        <SecondaryArticle key={index} article={article}></SecondaryArticle> 
      )}

    </div>
  );
}

export default Articles;

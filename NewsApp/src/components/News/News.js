import React from "react";
import "./News.scss";
import { addZero, getDay, getMonth } from "../../allFuncition";

const News = ({ data }) => {
  const titleColorEndBlue = (data) => {
    const titleArr = data.title.split(" ");
    const lenghtTitleArr = titleArr.length;
    const endElmTitleArr = titleArr.splice(lenghtTitleArr - 1).join();
    return endElmTitleArr;
  };

  const titleExceptTheLast = (data) => {
    const titleArr = data.title.split(" ");
    const lenghtTitleArr = titleArr.length;
    const arrTitleTheLast = titleArr.splice(0, lenghtTitleArr - 1).join(" ");
    return arrTitleTheLast;
  };

  const month = getMonth(data);
  const formattedMonth = addZero(month + 1);

  const day = getDay(data);
  const formattedDay = addZero(day);

  return (
    <main className="main">
      <div className="wrapper-news">
        <div className="block-posts">
          <h2 className="block-posts__title">
            {titleExceptTheLast(data)} <span>{titleColorEndBlue(data)}</span>
          </h2>
          <a href={data.url} className="block-posts__link">
            {data.source.name}
          </a>
          <div className="block-posts__date">
            {formattedMonth}
            <span>/{formattedDay}</span>
          </div>
        </div>
        <article className="article">
          <img src={data.urlToImage} alt="картинка" />
          <p className="text">{data.description}</p>
          <p className="text">{data.content}</p>
        </article>
      </div>
    </main>
  );
};

export default News;

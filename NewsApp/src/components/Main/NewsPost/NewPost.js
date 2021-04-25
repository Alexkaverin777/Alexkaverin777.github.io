import React from "react";
import "./newPost.scss";
import { NavLink } from "react-router-dom";
import { addZero, getDay, getMonth } from "../../../allFuncition";

const NewPost = ({ item, clickTitle, title, url, source }) => {
  const month = getMonth(item);
  const formattedMonth = addZero(month + 1);

  const day = getDay(item);
  const formattedDay = addZero(day);

  return (
    <div className="post">
      <NavLink
        to="/news/postNews"
        className="post__title line-blue"
        onClick={clickTitle}
      >
        {title}
      </NavLink>
      <div className="link-bloc">
        <a href={url}>{source}</a>
        <div className="link-bloc__date">
          <span>{formattedDay}</span>/ {formattedMonth}
        </div>
      </div>
    </div>
  );
};

export default NewPost;

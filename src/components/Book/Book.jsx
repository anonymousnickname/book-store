import React from "react";

import "./Book.css";

export const Book = ({ count, data, onRemoveBook, onSetReadBook }) => {
  const title = `book-title ${data.isRead ? "isRead" : ""}`;
  return (
    <li className="book-wrapper">
      <span className="book-count">{count}</span>
      <span className={title}>{data.title}</span>
      <span className="row">
        <span className="pointer" onClick={() => onRemoveBook(data.id)}>
          🗑️
        </span>
        <input
          type="checkbox"
          className="pointer"
          checked={data.isRead}
          onChange={() => onSetReadBook(data.id)}
        />
      </span>
    </li>
  );
};

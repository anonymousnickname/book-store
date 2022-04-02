import React from "react";

import { Book } from "..";
import "./Books.css";

export const Books = ({ books, removeBook, setReadBook }) => {
  return (
    <ul className="books-list">
      {books.length ? (
        books.map((item, idx) => {
          return (
            <Book
              key={item.id}
              count={idx + 1}
              data={{ ...item }}
              onRemoveBook={removeBook}
              onSetReadBook={setReadBook}
            />
          );
        })
      ) : (
        <h1 style={{ textAlign: "center" }}>There is no any data</h1>
      )}
    </ul>
  );
};

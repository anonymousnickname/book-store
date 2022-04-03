import React, { useState, useRef, useEffect } from "react";

import "./BookForm.css";

export const BookForm = ({ onAddNewBook }) => {
  const inputRef = useRef(null);
  const [book, setBook] = useState(() => ({
    isRead: false,
    title: "",
  }));
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <form
      className="book-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (book.title.length) {
          onAddNewBook(book);
          setBook(() => ({
            isRead: false,
            title: "",
          }));
        }
      }}
    >
      <input
        ref={inputRef}
        type="text"
        className="book-input"
        placeholder="Title of book"
        value={book.title}
        onChange={(e) => {
          setBook((prev) => ({ ...prev, title: e.target.value }));
        }}
      />
      <button className="book-button pointer" type="submit">
        Add new book
      </button>
    </form>
  );
};

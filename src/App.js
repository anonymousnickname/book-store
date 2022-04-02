import React, { useState } from "react";

import BOOKS from "./store/books.json";
import { Books, BookForm, StatisticsBoard } from "./components";

import "./App.css";

const App = () => {
  const [data, setData] = useState(BOOKS);

  const removeBook = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const addNewBook = (book) => {
    setData((prev) => [...prev, { ...book, id: data.length + 1 }]);
  };

  const setReadBook = (id) => {
    const idx = data.findIndex((item) => item.id === id);
    const oldBook = data[idx];
    const newBook = { ...oldBook, isRead: !oldBook.isRead };

    setData((prev) => {
      return [...prev.slice(0, idx), newBook, ...prev.slice(idx + 1)];
    });
  };

  const removeAll = () => {
    setData([]);
  };

  const statisticsData = {
    all: data.length,
    readBooks: data.filter((book) => book.isRead).length,
    notReadBooks: data.filter((book) => !book.isRead).length,
  };
  return (
    <div className="container">
      <BookForm onAddNewBook={addNewBook} />
      <StatisticsBoard {...statisticsData} onRemoveAll={removeAll} />
      <Books books={data} removeBook={removeBook} setReadBook={setReadBook} />
    </div>
  );
};

export default App;

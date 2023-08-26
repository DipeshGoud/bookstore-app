import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks('harry+potter');
    fetchBooks('Sherlock+Holmes');
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      if (data.items) {
        setBooks((prevBooks) => [...prevBooks, ...data.items]);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async (query) => {
    setBooks([]); // Clear previous books
    await fetchBooks(query);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default App;

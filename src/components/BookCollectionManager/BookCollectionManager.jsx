import React, { useState } from "react";
import "./BookCollectionManager.css"

/**
 * BookCollectionManager Component
 * A reusable component for managing a collection of books.
 * Features:
 * - Add new books with title and author
 * - Delete existing books
 * - Display total book count
 * - Input validation and error handling
 * - Duplicate detection
 */
function BookCollectionManager() {
  // State for managing the list of books
  const [books, setBooks] = useState([
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen" }
  ]);
  
  // State for form inputs
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  
  // State for error messages
  const [error, setError] = useState("");

  // Handle title input change and clears any existing error messages
  function handleTitleChange(event) {
    setTitle(event.target.value);
    setError("");
  }

  // Handle author input change and clears any existing error messages
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
    setError("");
  }
  
  //Add a new book to the collection and validates inputs and checks for duplicates
  function addBook() {
    const trimmedTitle = title.trim();
    const trimmedAuthor = author.trim();

    // Validate empty inputs
    if (trimmedTitle === "" || trimmedAuthor === "") {
      setError("Both title and author are required");
      return;
    }

    // Check for duplicate books 
    const isDuplicate = books.some(
      book => 
        book.title.toLowerCase() === trimmedTitle.toLowerCase() && 
        book.author.toLowerCase() === trimmedAuthor.toLowerCase()
    );

    if (isDuplicate) {
      setError("This book already exists in your collection");
      return;
    }

    // Add new book with unique ID
    const newBook = {
      id: Date.now(),
      title: trimmedTitle,
      author: trimmedAuthor
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    setTitle("");
    setAuthor("");
    setError("");
  }

  /**
   * Delete a book from the collection by ID
   * @param {number} id - Unique identifier of the book to delete
   */
  function deleteBook(id) {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Book title (e.g., The Great Gatsby)"
          value={title}
          onChange={handleTitleChange}
          aria-label="Book title"
        />
        <input
          type="text"
          placeholder="Author name (e.g., F. Scott Fitz)"
          value={author}
          onChange={handleAuthorChange}
          aria-label="Author name"
        />
        <button onClick={addBook} aria-label="Add book to collection">
          Add Book
        </button>
        {error && <p className="error-message" role="alert">{error}</p>}
      </div>
      
      <p className="book-count">
        Total Books: {books.length}
      </p>
      
      <ol>
        {books.length === 0 ? (
          <p className="empty-message">No books in your collection yet. Add one above!</p>
        ) : (
          books.map((book) => (
            <li key={book.id}>
              <span className="book-info">
                <strong>{book.title}</strong> by {book.author}
              </span>
              <button 
                onClick={() => deleteBook(book.id)}
                aria-label={`Delete ${book.title}`}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ol>
    </div>
  );
}

export default BookCollectionManager;
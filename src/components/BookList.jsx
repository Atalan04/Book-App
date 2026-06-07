import { useState } from "react";
import { books } from "../constants/mockData.js";
import FavoriteList from "./FavoriteList.jsx";

function BookList() {
  const [favorite, setFavorite] = useState([]);

  const handleFavorite = (book) => {
    const isFavorite = favorite.some((i) => i.id === book.id);

    if (isFavorite) {
      setFavorite((list) => list.filter((i) => i.id != book.id));
    } else {
      setFavorite((list) => [...list, book]);
    }
  };
  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />-{book.title}-{book.author}
            -{book.country}-{book.pages}
            <button onClick={() => handleFavorite(book)}>🤍</button>
          </li>
        ))}
      </ul>
    
        <FavoriteList favorite={favorite}/>
      
    </>
  );
}

export default BookList;

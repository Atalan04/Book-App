function FavoriteList({ favorite }) {
  return (
    <>
      <h2>Favorites</h2>
      <ul>
        {favorite.map((book) => (
          <li key={book.id}>
            <img src={book.image} />
            {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default FavoriteList;

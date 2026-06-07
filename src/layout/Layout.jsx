function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Book App</h1>
      </header>
      {children}
      <footer>
        <h3>Developed by Ahmadreza with ❤️</h3>
      </footer>
    </>
  );
}

export default Layout;

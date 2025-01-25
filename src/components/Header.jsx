function Header() {
  return (
    <header className="mb-5 p-3 bg-black">
      <div className="container d-flex justify-content-between align-items-center">
      <h1 className="container text-light">FakaStore</h1>
      <div className="w-50 d-flex justify-content-end align-items-center">
        <i className="mx-5 h-25 bi bi-cart-fill text-light"></i>
        <i className="mx-5 h-25 bi bi-bookmark-heart-fill text-danger"></i>
      </div>
      </div>
    </header>
  );
}

export default Header;

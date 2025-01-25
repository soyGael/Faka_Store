import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-5 p-3 bg-black">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="container text-light">
          Faka<i className="bi bi-arrow-through-heart-fill"></i>Shop
        </h1>
        <div className="w-50 d-flex justify-content-end align-items-center">
          <Link to="/">
            <i className="mx-3 bi bi-house-door-fill text-light"></i>
          </Link>
          <Link to="/">
            <i className="mx-3 bi bi-cart-fill text-light"></i>
          </Link>
          <Link to="/">
            <i className="mx-3 bi bi-bookmark-heart-fill text-danger"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

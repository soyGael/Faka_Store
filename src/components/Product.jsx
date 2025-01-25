import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Product({ title, description, img, price, category, className }) {
  const maxLength = 40;
  const cutDescription =
    description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  const cutTitle = title.length > 20 ? title.substring(0, 20) + "..." : title;

  return (
    <div className={className}>
      <div className="d-flex justify-content-center container-img">
        <img src={img} className="w-img-50" />
      </div>
      <div className="">
        <h2 className="h1-title">{cutTitle}</h2>
        <p>{cutDescription}</p>
        <p><span>Precio:</span> ${price}</p>
        <p><span>Categoría:</span> {category}</p>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/">
          <button className="btn btn-outline-dark me-md-2" type="button">
          <i className="mx-3 bi bi-cart-fill"></i>
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline-danger" type="button">
          <i className="mx-3 bi bi-bookmark-heart-fill"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Product;

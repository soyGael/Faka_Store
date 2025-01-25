import PropTypes from "prop-types";
function Product({ title, description, img, price, category, className }) {
  const maxLength = 40;
  const cutDescription =
    description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  const cutTitle =
    title.length > 20
      ? title.substring(0, 20) + "..."
      : title;

  return (
    <div className={className}>
      <div className="d-flex justify-content-center container-img">
        <img src={img} className="w-img-50" />
      </div>
      <div className="">
        <h2 className="h1-title">{cutTitle}</h2>
        <p>{cutDescription}</p>
        <p>Precio: ${price}</p>
        <p>Categoría: {category}</p>
      </div>
      <div className="d-flex">
        
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

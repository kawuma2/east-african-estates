import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Land({ land }) {
  const { name, slug, images, price } = land;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="farm land" />
        <div className="price-top">
          <h6>${price}</h6>
        </div>
        <Link to={`/lands/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Land.propTypes = {
  land: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export default function Housecomponent({house}) {
    const {
        title, slug, images, price
    } = house;
  return (
    <article className='room'>
        <div className='img-container'>
            <img src={images[0]} alt='thishouse' />
            <div className='price-top'>
                <h6>${price}</h6>
            </div>
            <Link to={`/houses/${slug}`} className="btn-primary room-link">
                Features
            </Link>
        </div>
        <p className='room-info'>{title}</p>
    </article>
  );
}


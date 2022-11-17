import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { HouseContext } from '../housecontext';
import { Link } from 'react-router-dom';

const SingleHouse = () => {
    const {slug} = useParams();
    const {getHouse} = useContext(HouseContext);
    const house = getHouse(slug);
    if(!house){
        return <div className='error'>
            <h3>no such house could be found</h3>
            <Link to='/houses' className='btn-primary'>
                Back to houses
            </Link>
        </div>
    }
    const {title, description, location, rooms, images
    , price, size, landsize, distance, view, hospital, school} = house;
  return (
    <>
    <section className='single-room'>
        <div className='single-room-title'><h3>{title}</h3></div>
        <div className='single-room-images'>
            {images.map((item, index) => {
                return <img key={index} src={item} alt={title} />
            })}
        </div>
        <div className='single-room-info'>
            <article className='desc'>
                <h3>Details</h3>
                <p>{description}</p>
            </article>
            <article className='info'>
                <h3>Info</h3>
                <h6>Location : <span>{location}</span></h6>
                <h6>Total Rooms : <span>{rooms}</span></h6>
                <h6>Size : <span>{size} SQRFT</span></h6>
                <h6>land size : <span>{landsize} Decimals</span></h6>
                <h6>Distance : <span>{distance}</span> Km off the main road</h6>
                <h6>View : <span>{view}</span></h6>
                <h6>Nearby School : <span>{school}</span> Km</h6>
                <h6>Nearby Hospital : <span>{hospital}</span> km</h6>
                <h4>Price : {price} USD</h4>
                <h5><Link to='/contacts'><span>Contact Us Now</span></Link></h5> 
            </article>
        </div>
    </section>
    </>
  )
}

export default SingleHouse;

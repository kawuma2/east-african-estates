import React, { useContext } from 'react'
import {Link, useParams} from 'react-router-dom';
import { LandContext } from '../context';
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const SingleLand = () => {
   const {slug} = useParams();
   const {getLand} = useContext(LandContext);
   const land = getLand(slug);
   if(!land){
    return <div className='error'>
      <h3>no such land could be found</h3>
      <Link to='/lands' className='btn-primary'>
        Back to lands
      </Link>
    </div>
   }
   const {name,description,capacity,size,price,extras,images} = land;
  return (
    <>
    <Hero hero='landsHero'>
      <Banner title={`${name} property`}>
        <Link to='/lands' className='btn-primary'>
          back to lands
        </Link>
      </Banner>
    </Hero>
    <section className='single-room'>
      <div className='single-room-images'>
        {images.map((item, index)=>{
          return <img key={index} src={item} alt={name} />
        })}
      </div>
      <div className='single-room-info'>
        <article className='desc'>
          <h3>Details</h3>
          <p>{description}</p>
        </article>
        <article className='info'>
          <h3>Info</h3>
          <h6>price :<span>${price}</span> </h6>
          <h6>Land size : <span>{size}</span> sqft</h6>
          <h6>
            Acres : <span>{" "} 
            {capacity > 1 ? `${capacity} acres` : `${capacity} arce`}</span>
          </h6>
          <h5><Link to='/contacts'><span>Buy this property</span></Link></h5>
        </article>
      </div>
      <section className='room-extras'>
        <h6>extras</h6>
        <ul className='extras'>
          {extras.map((item, index) => {
            return <li key={index}> - {item}</li>
          })}
        </ul>
      </section>
    </section>
    </>
  )
}

export default SingleLand;
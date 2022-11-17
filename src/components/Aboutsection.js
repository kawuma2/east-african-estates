import React from 'react'
import { Link } from 'react-router-dom'
import '../cssfiles/aboutsection.css'
import img1 from '../images/land images/img12.jpg'


export default function Aboutsection() {
  return (
    <section className='about-section-container'>
        <div className='about-section-columns'>
            <div className='first-column col1-bg'>
                <h3>About Us</h3>
                <h5>East Africa's trusted property
                    advisory and brokerage firm.
                </h5>
                <p>We are a well-established 
                    international property consultancy
                     firm with considerable local 
                     expertise and experience enabling
                      us to provide unrivalled 
                      services in Uganda. 
                      Working with private 
                      individuals, developers, 
                      investors, banks, corporate 
                      occupiers and public sector 
                      bodies we provide a range of 
                      agency, investment and 
                      professional consultancy 
                      services which are supported 
                      by our dedicated market research
                       teams.</p>
                       <Link to='/contacts'><h5 className='more-about'>Talk With Us</h5></Link>
            </div>
            <div className='second-column col2-bg'>
                <img src={img1} alt='an image here' />
            </div>
        </div>
    </section>
  )
}

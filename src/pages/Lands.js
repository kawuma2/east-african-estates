import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import LandsContainer from '../components/LandsContainer'

export default function Lands() {
  return (
    <>
    <Hero hero="landsHero">
      <Banner title='our lands'>
        <Link to='/' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
    <LandsContainer />
    </>
  )
}

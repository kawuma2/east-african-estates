import React from 'react'
import Land from './Land'

function LandList({lands}) {
  if(lands.length === 0){
    return (
      <div className='empty-search'>
        <h3>Unfortunately no lands matched your search parameters</h3>
      </div>
    )
  }
  return (
    <section className='landslist'>
      <div className='roomslist-center'>
        {
          lands.map(item => {
            return <Land key={item.id} land={item} />
          })
        }
      </div>
    </section>
  )
}

export default LandList;
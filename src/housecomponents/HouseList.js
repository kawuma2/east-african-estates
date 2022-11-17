import React from 'react'
import Housecomponent from './Housecomponent';

function HouseList({houses}) {
    if(houses.length === 0){
        return(
            <div className='empty-search'>
                <h3>Unfortunately no house matched
                    your search
                </h3>
            </div>
        )
    }
  return (
    <section className='houselist'>
        <div className='roomslist-center'>
            {
                houses.map(item => {
                    return <Housecomponent key={item.id} house={item} />
                })
            }
        </div>
    </section>
  )
}

export default HouseList;
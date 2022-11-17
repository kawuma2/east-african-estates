import React, { Component } from 'react'
import Title from './Title'
import { FaWarehouse ,FaLandmark, FaCity, FaWater } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            
            {
                icon: <FaWarehouse />,
                title: "Business warehouses",
                info: "You wan't to start a business? we have everything you need."
            },
            {
                icon: <FaHome />,
                title: "Nice homes and apartments",
                info: "We offer nice homes and apartments suiting your needs"
            },
            {
                icon: <FaWater />,
                title: "Water view fertile lands",
                info: "Water view lands are available"
            },
            {
                icon: <FaCity />,
                title: "Property in city",
                info: 'Land and plots in big cities are available'
            }
        ]
    }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
            {this.state.services.map((item, index) =>{
                return <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            }
            
            )}
        </div>
      </section>
    )
  }
}

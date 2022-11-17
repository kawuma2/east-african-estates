import React, { Component } from 'react'
import {LandContext} from '../context';
import Land from './Land';
import Title from './Title';

export default class FeaturedLands extends Component {
  static contextType = LandContext
  render() {
    let {featuredLands : lands} = this.context;
      lands = lands.map(land => {
        return <Land key={land.id} land={land} />;
      });
    return (
      <section className='featured-rooms'>
      <Title title="featured Property" />
      <div className="featured-rooms-center">
        {lands}
      </div>

      
        </section>
    )
  }
}

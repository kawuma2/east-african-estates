import React, { Component } from 'react';
//import items from "./housedata";
import Client from "./Contentful"


const HouseContext = React.createContext();

export default class HouseProvider extends Component {
    state = {
        houses:[],
    }

    getData = async () => {
      try {
        let response = await Client.getEntries({
          content_type: "eastAfricanEstatesHouse"
        });

        let houses = this.formatData(response.items);
        this.setState({
            houses
        });

      } catch (error){
        console.log(error);
      }
    }


    componentDidMount(){
       this.getData();
    }

    formatData(items){
        let formatedData = items.map((item) => {
            let images = item.images.map(image => image);
            let house = {...item, images}
            

            return house;
            
        });
        return formatedData;
    }

    getHouse = slug => {
        let tempHouses = [...this.state.houses];
        const house = tempHouses.find(house => house.slug === slug)
        return house;
    }

  render() {
    return (
      <HouseContext.Provider value ={{...this.state, getHouse: this.getHouse}}>
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}

const HouseConsumer = HouseContext.Consumer;

export {HouseProvider, HouseConsumer, HouseContext};
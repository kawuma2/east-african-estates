import React, { Component } from "react";
//import items from "./data";
import Client from "./Contentful"


const LandContext = React.createContext();

export default class LandProvider extends Component {
  state = {
    lands: [],
    sortedLands: [],
    featuredLands: [],
    loading: true,
  };
  
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "eastAfricanEstates"
      });

      let lands = this.formatData(response.items);
    let featuredLands = lands.filter((land) => land.featured === true);
    this.setState({ 
      lands, 
      featuredLands, 
      sortedLands: lands, 
      loading: false });

    } catch (error){
      console.log(error);
    }
  }



  componentDidMount() {
    this.getData()
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let land = { ...item.fields, images, id };
      return land;
    });
    return tempItems;
  }

  getLand = slug => {
    let tempLands = [...this.state.lands];
    const land = tempLands.find(land => land.slug === slug);
    return land;
  };

  render() {
    
    return (
      <LandContext.Provider value={{ ...this.state, getLand: this.getLand }}>
        {this.props.children}
      </LandContext.Provider>
    );
  }
}

const LandConsumer = LandContext.Consumer;

export { LandProvider, LandConsumer, LandContext };

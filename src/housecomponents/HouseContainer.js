import React from 'react';
import HouseList from './HouseList';
import {HouseConsumer} from "../housecontext";
import Housecomponent from './Housecomponent';

export default function HouseContainer() {
  return (
    <HouseConsumer>
        {(value) => {
            const {houses} = value;
            return (
                <>
                <HouseList houses={houses} />
                </>
            );
        }}
    </HouseConsumer>
  );
}

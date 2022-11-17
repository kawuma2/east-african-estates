import React from "react";
import LandList from "./LandList";
import { LandConsumer } from "../context";

export default function LandsContainer() {
  return (
    <LandConsumer>
      {(value) => {
        const { featuredLands, lands, sortedLands } = value;
        return (
          <>
            <LandList lands={sortedLands} />
          </>
        );
      }}
    </LandConsumer>
  );
}

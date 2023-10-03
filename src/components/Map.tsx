import React, { useRef } from "react";
import useCreateMap from "./hooks";

const Map: React.FC = () => {
  const mapRef = useRef(null);
  useCreateMap(mapRef);
  return <div className="map-view" ref={mapRef} />;
};
export default Map;

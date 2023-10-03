import './ExploreContainer.css';
import Map from  "./Map.js";
// import Map from '@arcgis/core/Map';

// const map = new Map({
//   basemap: "topo-vector" //Reference to the base of the map
// });

// import MapView from '@arcgis/core/views/MapView';

// const view = new MapView({
//   container: "container", // Reference to the view div created 
//   map: map, // Reference to the map object created before the view
//   zoom: 4, // Sets zoom level based on level of detail (LOD)
//   center: [15, 65] // Sets center point of view using longitude,latitude
// });


interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      <Map />
      </div>
  );
};

export default ExploreContainer;

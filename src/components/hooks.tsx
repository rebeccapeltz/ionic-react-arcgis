import { useEffect } from "react";

import { loadModules } from "esri-loader";



 const useCreateMap: any  = (mapRef:any) => {
    // debugger
  useEffect(() => {
    // debugger;
    let view:any;

    const initializeMap = async (mapRef:any) => {
      const modules = ["esri/Map", "esri/views/MapView"];
      const [Map, MapView] = await loadModules(modules);
      const map = new Map({ basemap: "streets-relief-vector" });
      view = new MapView({
        map: map,
        zoom: 13,
        container: mapRef.current,
        center: [-104.82313502980763, 38.828962462600366]
      });
    };
    initializeMap(mapRef);
    return () => view?.destroy();
  }, [mapRef]);
};
export default useCreateMap;

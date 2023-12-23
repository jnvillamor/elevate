'use client';

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const Map = () => {

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const initMap = async () => {
      
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat: 7.043508,
        lng: 125.524814,       
      }

      const mapOptions: google.maps.MapOptions = { 
        center: position,
        zoom: 10,
        mapId: process.env.NEXT_PUBLIC_MAP_ID as string,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false,
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    }

    initMap();
  })
  
  return (
    <div className="h-full rounded-[32px]" ref={mapRef} />
  )
}

export default Map
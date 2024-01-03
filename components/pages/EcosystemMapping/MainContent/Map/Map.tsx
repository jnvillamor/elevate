'use client';

import { Startup } from '@/common';
import { useMyContext } from '@/contexts/DataContextProvider';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react';

type MapProps = {
  startup: Startup | Startup[];
};

const Map = ({ startup }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat: 7.092347,
        lng: 125.600056
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 13,
        mapId: process.env.NEXT_PUBLIC_MAP_ID as string,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      if (startup instanceof Array) {
        startup.map((item) => {
          const marker = new google.maps.Marker({
            position: {
              lat: item.coords.lat,
              lng: item.coords.lng
            },
            map,
            title: item.name,
            icon: {
              url: `/icons/${item.type === 'Startup' ? 'startup' : 'enabler'}-pin.svg`,
              scaledSize: new google.maps.Size(20, 20)
            }
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
            <div class='flex flex-col gap-2'>
              <span class='text-neutrals-950 font-bold text-base'>${item.name}</span>
            </div>
          `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
      } else {
        map.setCenter(startup.coords);

        const marker = new google.maps.Marker({
          position: {
            lat: startup.coords.lat,
            lng: startup.coords.lng
          },
          map,
          title: startup.name,
          icon: {
            url: `/icons/${startup.type === 'Startup' ? 'startup' : 'enabler'}-pin.svg`,
            scaledSize: new google.maps.Size(20, 20)
          }
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
          <div class='flex flex-col gap-2'>
            <span class='text-neutrals-950 font-bold text-base'>${startup.name}</span>
          </div>
        `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    };

    initMap();
  });

  return <div className='h-full rounded-[32px] mb-14' ref={mapRef} />;
};

export default Map;

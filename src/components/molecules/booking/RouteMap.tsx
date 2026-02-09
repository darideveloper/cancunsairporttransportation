import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { useSearchFormStore } from "../../../store/search-form";
import clsx from "clsx";

interface Props {
  className?: string;
}

export default function RouteMap({ className }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { locationFromData, locationToData } = useSearchFormStore();

  useEffect(() => {
    setOptions({
      key: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY || "",
      v: "weekly",
    });

    Promise.all([
      importLibrary("maps"),
      importLibrary("routes"),
      importLibrary("places"),
    ]).then(() => {
      const google = (window as any).google;
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        zoom: 9,
        center: { lat: 21.1619, lng: -86.8515 }, // Centered near Cancun
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: false,
      });

      if (locationFromData && locationToData) {
        const origin = { lat: locationFromData.lat, lng: locationFromData.lng };
        const destination = {
          lat: locationToData.lat,
          lng: locationToData.lng,
        };

        directionsService.route(
          {
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (
            result: google.maps.DirectionsResult | null,
            status: google.maps.DirectionsStatus,
          ) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
              directionsRenderer.setDirections(result);
            } else {
              console.error("Directions request failed due to " + status);
            }
          },
        );
      }
    });
  }, [locationFromData, locationToData]);

  return (
    <div className="map">
      <div
        ref={mapRef}
        className={clsx(
          "h-[250px] w-full overflow-hidden rounded-xl bg-gray-100 shadow-md",
          className,
        )}
        aria-label="Travel route map"
      />
    </div>
  );
}

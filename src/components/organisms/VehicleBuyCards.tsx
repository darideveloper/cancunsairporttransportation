import VehicleBuyCard, {
  type VehicleBuyCardProps,
} from "../molecules/VehicleBuyCard";

interface VehicleBuyCardsProps {
  vehicles: VehicleBuyCardProps[];
}

/**
 * Organism to render a list of vehicle buy cards.
 * This component is responsible for the layout and spacing of the vehicle results.
 */
export default function VehicleBuyCards({ vehicles }: VehicleBuyCardsProps) {
  if (!vehicles || vehicles.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-6">
      {vehicles.map((vehicle, index) => (
        <VehicleBuyCard key={`${vehicle.vehicleName}-${index}`} {...vehicle} />
      ))}
    </div>
  );
}

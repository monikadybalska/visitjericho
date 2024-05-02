export default function PlaceMap({
  streetAddress,
  latitude,
  longitude,
}: {
  streetAddress: string;
  latitude: number;
  longitude: number;
}) {
  return (
    <iframe
      className="w-full h-full min-h-[400px] lg:min-h-0"
      style={{ border: 0 }}
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API}
&q=${streetAddress},lat=${latitude},lon=${longitude}zoom=15`}
    ></iframe>
  );
}

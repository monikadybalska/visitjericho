export default function DirectionsMap({ mapURL }: { mapURL: string }) {
  return (
    <iframe
      src={mapURL}
      className="w-full h-full min-h-[400px] lg:min-h-0"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  );
}

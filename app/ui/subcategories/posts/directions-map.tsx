export default function DirectionsMap({ mapURL }: { mapURL: string }) {
  return (
    <iframe
      src={mapURL}
      className="w-full h-full"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  );
}

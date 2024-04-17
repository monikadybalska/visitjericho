export default function PlacesPageColumn({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-serif">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function PostDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h1 className="font-serif">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
    </>
  );
}

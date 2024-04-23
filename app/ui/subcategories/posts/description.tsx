export default function PostDescription({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <>
      {title && <h1 className="font-serif">{title}</h1>}
      {description && (
        <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
      )}
    </>
  );
}

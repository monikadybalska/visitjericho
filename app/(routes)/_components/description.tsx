export default async function Description({
  slug,
  query,
}: {
  slug: string;
  query: (slug: string) => Promise<string | null>;
}) {
  const description = await query(slug);
  return (
    description && (
      <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
    )
  );
}

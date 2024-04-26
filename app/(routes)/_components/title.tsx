export default async function Title({
  slug,
  query,
}: {
  slug: string;
  query: (slug: string) => Promise<string | null>;
}) {
  const title = await query(slug);
  return title && <h1 className="font-serif">{title}</h1>;
}

import SectionLayout from "@/app/ui/section-layout";

export default function PostDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <SectionLayout>
      <h1 className="font-serif">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
    </SectionLayout>
  );
}

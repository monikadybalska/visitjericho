export default function SectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full max-w-screen-xl gap-6">{children}</div>
  );
}

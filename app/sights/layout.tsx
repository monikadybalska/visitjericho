export default function SightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-between px-5 md:px-20">
      <div className="w-full max-w-screen-xl">{children}</div>
    </div>
  );
}

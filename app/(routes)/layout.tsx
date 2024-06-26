export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-between px-5 md:px-20">
      <div className="flex flex-col w-full max-w-screen-xl gap-12">
        {children}
      </div>
    </div>
  );
}

import PageLayout from "../ui/page-layout";

export default function ItinerariesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}

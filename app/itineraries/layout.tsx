import PageLayout from "../components/page-layout";

export default function ItinerariesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}

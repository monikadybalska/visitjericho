import PageLayout from "../components/page-layout";

export default function PlacesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}

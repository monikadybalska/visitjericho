import PageLayout from "../ui/page-layout";

export default function PlacesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}

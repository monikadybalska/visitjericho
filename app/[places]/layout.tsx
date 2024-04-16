import PageLayout from "../components/subcategory-pages/page-layout";

export default function PlacesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}

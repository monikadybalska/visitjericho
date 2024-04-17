import PageLayout from "../components/page-layout";

export default function PracticalitiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}

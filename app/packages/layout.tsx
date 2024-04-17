import PageLayout from "../components/page-layout";

export default function PackagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout>{children}</PageLayout>;
}

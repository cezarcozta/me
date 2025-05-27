import Footer from "@/components/footer/footer";
import Header from "@/components/header/header"

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16">{children}</section>
      <Footer />
    </main>
  );
}

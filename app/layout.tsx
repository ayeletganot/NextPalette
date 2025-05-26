import "../styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Metadata
export const metadata = {
  title: "NextPalette",
  description: "Generate beautiful color palettes instantly with NextPalette",
};

// Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        <main className="h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

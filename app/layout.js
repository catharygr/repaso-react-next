import "./globals.css";
import Header from "./componentes/header";
import Footer from "./componentes/footer/Footer";

export const metadata = {
  title: "Repaso de Next.js",
  description: "Repasando Nextjs con React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

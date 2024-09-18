import "./globals.css";
import Header from "./componentes/header";
import Footer from "./componentes/footer/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "Repaso de Next.js",
  description: "Repasando Nextjs con React",
};

const monaSanzFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={monaSanzFont.className}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

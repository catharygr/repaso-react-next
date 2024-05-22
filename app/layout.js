import "./globals.css";

export const metadata = {
  title: "Repaso de Next.js",
  description: "Repasando Nextjs con React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

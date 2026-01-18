// @ts-ignore: side-effect import of CSS without type declarations
import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore: side-effect import of CSS without type declarations
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

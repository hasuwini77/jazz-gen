// app/layout.tsx
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import { Timmana } from "next/font/google";

const timmana = Timmana({
  subsets: ["latin"],
  weight: ["400"],
});
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jazz Gen",
  description: "Generate new music Genres and Stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} ${timmana.className}`}>
        {children}
      </body>
    </html>
  );
}

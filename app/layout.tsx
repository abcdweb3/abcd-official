import "./globals.css";
import { Inter } from "next/font/next/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APAC BLOCKCHAIN DAY | ABCD",
  description: "Connecting Asia's Web3 Ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" class="dark">
      <body class={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}

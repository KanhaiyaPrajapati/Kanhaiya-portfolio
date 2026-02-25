import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kanhaiya Prajapati | Frontend Engineer",
  description:
    "Portfolio of Kanhaiya Prajapati — Frontend Engineer specializing in React.js, Next.js, React Native, and modern web technologies. Based in Surat, Gujarat.",
  keywords: [
    "Frontend Engineer",
    "React.js Developer",
    "Next.js Developer",
    "React Native",
    "Kanhaiya Prajapati",
    "Web Developer",
    "Surat",
    "Portfolio",
  ],
  authors: [{ name: "Kanhaiya Prajapati" }],
  openGraph: {
    title: "Kanhaiya Prajapati | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React.js, Next.js, and modern web technologies.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

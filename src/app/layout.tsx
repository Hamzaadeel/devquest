import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "DevQuest",
  description: "Web Dev Interview Prep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-zinc-900 ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <HeroSection />
          <main className="p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

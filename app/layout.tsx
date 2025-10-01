import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibe Zone Dev Blog App",
  description: "The best blog app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <ThemeProvider>
              <ClientLayout>
                <Navbar />
                {children}
                <Footer />
              </ClientLayout>
            </ThemeProvider>
          </AuthProvider>
        </body>
      </html>
    </html>
  );
}

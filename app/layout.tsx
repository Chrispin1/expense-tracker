import type { Metadata } from "next";
import { Bricolage_Grotesque, Jost } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Show, UserButton } from "@clerk/react";
import Header from "@/components/Header";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const grotesque = Bricolage_Grotesque({
  variable: "--font-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses and create a budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${jost.variable} ${grotesque.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <Header />
          <main className="container">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

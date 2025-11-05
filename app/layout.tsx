import "../styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Faizal Bagwan — DevOps | Cloud | Linux Engineer",
  description: "Automation, Kubernetes, CI/CD, and reliable systems. Portfolio, projects, and services by Faizal Bagwan.",
  openGraph: {
    title: "Faizal Bagwan — DevOps | Cloud | Linux Engineer",
    description: "Automation, Kubernetes, CI/CD, and reliable systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

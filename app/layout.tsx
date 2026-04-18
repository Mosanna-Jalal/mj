import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MJ — Mosanna Jalal | Full-Stack Developer",
  description:
    "Personal portfolio of Mosanna Jalal — Full-Stack Developer, MERN Specialist, AI Engineer & Cinematographer from Gaya, India.",
  keywords: [
    "Mosanna Jalal",
    "MJ",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "OpenAI",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: import("react").ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        {/* Anti-flash: set theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mj-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col noise-overlay">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

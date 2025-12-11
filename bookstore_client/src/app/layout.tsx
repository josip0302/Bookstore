import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/_components/ui/provider";
import Navbar from "@/_components/Navbar";
import { Container } from "@chakra-ui/react";
import Footer from "@/_components/Footer";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Book store",
    description: "Book store application built with Next.js and Chakra UI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Provider>
                    <Navbar />
                    <Container
                        maxW="full"
                        minH="80vh"
                        centerContent
                        background="linear-gradient(to bottom, #12251cff, #2d8757ff, #44cf70ff, #FFFFFF)"
                        p={10}
                    >
                        {children}
                    </Container>
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}

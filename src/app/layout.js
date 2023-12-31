"use client";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Footer } from "@/components";
import Header from "../components/header";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from "./nexttoast";
import 'react-toastify/dist/ReactToastify.css'

const manrope = Manrope({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={`${manrope.className}`}>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </CartProvider>
    </html>
  );
}

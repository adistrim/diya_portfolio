import { Montserrat } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Diya Mathur",
  description: "",
  keywords:
    "Diya Mathur, diya mathur, diya, mathur, diyamth, Diyamth, DIYA MATHUR, diya mathur portfolio, diya portfolio, diyamth portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sunflower.svg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

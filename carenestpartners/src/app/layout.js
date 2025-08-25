import {Sorts_Mill_Goudy, Molengo, Oswald} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const sorts_mill_goudy = Sorts_Mill_Goudy({
  variable: "--font-sorts-mill-goudy",
  weight: ["400"],
});

const molengo = Molengo({
  variable: "--font-molengo",
  weight: ["400"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carenest Partners Inc.",
  description: "Enhancing healthcare quality with feasible solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
    ${oswald.variable}
    ${molengo.variable}
    ${sorts_mill_goudy.variable}
    antialiased
  `}
      >
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

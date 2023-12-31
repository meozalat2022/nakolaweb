import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ناكل أيه؟",
  description: "Web site created By Mohammed Refat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" flex flex-col h-screen justify-between">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

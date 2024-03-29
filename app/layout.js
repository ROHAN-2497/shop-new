import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";
import classNames from "classnames";
import Providers from "./providers";
import Toaster from "@/app/components/Toaster";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Shop New",
  description: "Easy Shop is an e-commerce web application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body
        className={classNames(
          roboto.variable,
          "container mx-auto px-2 font-roboto lg:px-10"
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col justify-between">
            <div>
              <NavBar />
              <main className="mt-5">{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;

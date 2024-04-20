import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import "./global-icon.css"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BasePage from "@/components/basepage/basepage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Practice",
  description: "Next.js starter app",
};

const lexend = Lexend({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lexend.className} bg-bg`}>
        <BasePage
          className={
            "border-2 border-red-900 min-h-screen flex flex-col justify-between"
          }
        >
          <Header />
          {children}
          <Footer />
        </BasePage>
      </body>
    </html>
  );
}

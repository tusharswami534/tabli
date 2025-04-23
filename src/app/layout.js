import BackToTop from "src/components/common/BackToTop";
import Footer from "../components/common/Footer";
import Hero from "../components/common/Hero";
import "./globals.css";


export const metadata = {
  title: "Tabli",
  description: "Con Tabli, potrai consultare l’offerta, ordinare e pagare direttamente dal tuo smartphone, in totale autonomia e senza attese.",
  openGraph: {
    title: "Tabli",
    description: "Con Tabli, potrai consultare l’offerta, ordinare e pagare direttamente dal tuo smartphone, in totale autonomia e senza attese.",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Hero/>
        {children}
        <Footer/>
        <BackToTop/>
      </body>
    </html>
  );
}

import { useState } from "react";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import BrandsBanner from "../components/BrandsBanner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import DoubleImage from "../components/DoubleImage";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <DoubleImage
        pathToOne="/women-page"
        imagePathOne="/banner-women.webp"
        altOne="Women's Fashion"
        imagePathTwo="/banner-men.webp"
        altTwo="Men's Fashion"
        spanTextOne="Mujer"
        spanTextTwo="Hombre"
      />
      <BrandsBanner
        imagePath="/Banner_International_spring2024.webp"
        alt="International Spring 2024"
        spanText="GLOBAL BRANDS"
        pathTo="/internationalbrands"
      />
      <BrandsBanner
        imagePath="/Banner_Local_Sara.webp"
        alt="Local Brands"
        spanText="LOCAL BRANDS"
        pathTo="/localbrands"
      />
      <Features />
      <Footer />
    </div>
  );
}

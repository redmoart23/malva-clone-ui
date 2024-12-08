import { useState } from "react";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import BrandsBanner from "../../components/BrandsBanner";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import DoubleImage from "../../components/DoubleImage";
import ProductCarousel from "../../components/carousel/ProductCarousel";

export default function WomenPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <BrandsBanner
        imagePath={"/Banner_Desk.webp"}
        alt={"Herencia Verde Malva"}
      />
      <BrandsBanner
        imagePath={"/Desk_Missoni.webp"}
        alt={"The Holiday Collection"}
        spanText="The Holiday Collection"
      />
      <BrandsBanner
        imagePath={"/Banner1_NewIn_CommonArea.webp"}
        alt={"Silver City"}
        spanText="SILVER CITY"
      />
      <ProductCarousel />

      <DoubleImage
        imagePathOne={"/Banner3_NewIn_AndreaLanda.webp"}
        imagePathTwo={"/Banner4_Swimwear.webp"}
        altOne={""}
        altTwo={""}
        spanTextOne={"ANDREA LANDA"}
        spanTextTwo="SWIMWEAR"
        spanTextAdditionalOne="A handmade Brand that brings all of their roots to life in their latest collection"
      />

      <BrandsBanner
        imagePath={"/Banner5_Bolsos.webp"}
        alt={"Bags & Purses"}
        spanText="BAGS & PURSES"
      />
      <BrandsBanner
        imagePath={"/Banner6_Sneakers.webp"}
        alt={"Silver City"}
        spanText="DEFINE YOUR STYLE"
      />

      <Features />
      <Footer />
    </div>
  );
}

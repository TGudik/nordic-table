import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import MenuSection from "../components/menuSection/MenuSection";
import Navigation from "../components/navigation/Navigation";


export default function Menu() {
    return (
      <div>
        <Navigation />
        <main>
          <Hero
            subheading={"VORES MENU"}
            heading={"Smagsoplevelser fra det \nnordiske køkken"}
            body={
              "Alt på vores menu er tilberedt af sæsonens friskeste råvarer. Vi arbejder tæt med lokale producenter for at sikre den bedste kvalitet."
            }
          />
          <MenuSection />
        </main>
        <Footer />
      </div>
    );
}
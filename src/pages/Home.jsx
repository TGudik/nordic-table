import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import HighlightedDishes from "../components/highlightedDishes/HighlightedDishes";
import Navigation from "../components/navigation/Navigation";


export default function Home() {


    return (
      <div>
        <Navigation home/>
        <main>
          <Hero
            heading={"Smag det \nnordiske"}
            subheading="- VELKOMST"
            body="Nordic Table er et sted, hvor sæsonens bedste råvarer forvandles til uforglemmelige oplevelser. Ro, kvalitet og hygge i hvert eneste måltid."
            home
          />
          <HighlightedDishes />
        </main>
        <Footer />
      </div>
    );
}
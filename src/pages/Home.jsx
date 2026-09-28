import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";


export default function Home() {


    return (
      <div>
        <Navigation />
        <main>
          <Hero
            heading={"Smag det \nnordiske"}
            subheading="- VELKOMST"
            body="Nordic Table er et sted, hvor sæsonens bedste råvarer forvandles til uforglemmelige oplevelser. Ro, kvalitet og hygge i hvert eneste måltid."
            home
          />
          <h1>Home</h1>
        </main>
      </div>
    );
}
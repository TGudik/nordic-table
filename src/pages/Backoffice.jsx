import BackNav from "../components/backoffice/backNav/BackNav";
import Navigation from "../components/navigation/Navigation";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

export default function Backoffice() {
    

    return (
        <div>
            <Navigation />
            <main>
                <Hero subheading="Håndter reservationer eller tilføj, slet og opdater retter" heading={"Backoffice"}/>
                <BackNav />
            </main>
            <Footer />
        </div>
    )
}
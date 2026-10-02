import Navigation from "../components/navigation/Navigation";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import BackDishes from "../components/backoffice/backDishes/BackDishes";

export default function BackofficeDishes() {
    

    return (
        <div>
            <Navigation />
            <main>
                <Hero subheading="Slet, ret eller tilføj retter" heading={"Retter"}/>
                <BackDishes />
            </main>
            <Footer />
        </div>
    )
}
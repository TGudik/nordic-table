import BackBookings from "../components/backoffice/backBookings/backBookings";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";

export default function BackofficeBookings() {
    return (
        <div>
            <Navigation />
            <Hero heading={"Reservationer"} subheading={"Se og accepter reservationer"}/>
            <main>
                <BackBookings />
            </main>
            <Footer />
        </div>
    )
}
import BookInfoCards from "../components/bookInfoCards/BookInfoCards";
import BookingForm from "../components/bookingForm/BookingForm";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import SectionHeader from "../components/sectionHeader/SectionHeader";


export default function Book() {

  

    return (
      <div>
        <style>
          {`
          @media (min-width: 1000px) {
            .bookGrid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              align-items: start;
              padding: 10px 0;
            }
          }
          `}
        </style>
        <Navigation />
        <main>
            <Hero
              subheading={"RESERVATIONER"}
              heading={"Book dit bord"}
              body={
                "Vi glæder os til at modtage dig. Book dit bord nedenfor, og vi sørger for resten."
              }
            />
            <div className="bookGrid">
              <div>
                <SectionHeader
                  overTitle={"GÆSTFRIHED"}
                  title={"Velkomst fra højre ben"}
                  subTitle={
                    "Vi ønsker at give dig og dine gæster den bedst mulige oplevelse. Her er hvad du skal vide inden dit besøg."
                  }
                  typeTwo
                />
                <BookInfoCards />
              </div>
              <BookingForm />
            </div>
        </main>
        <Footer />
      </div>
    );
}
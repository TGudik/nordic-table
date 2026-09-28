import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";


export default function Book() {


    return (
      <div>
        <Navigation />
        <main>
          <Hero
            subheading={"RESERVATIONER"}
            heading={"Book dit bord"}
            body={
              "Vi glæder os til at modtage dig. Book dit bord nedenfor, og vi sørger for resten."
            }
          />
        </main>
      </div>
    );
}
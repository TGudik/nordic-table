import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import SignInForm from "../components/signInForm/SignInForm";


export default function Login() {

    return (
        <div>
            <Navigation />
            <main>
                <SignInForm />
            </main>
            <Footer />
        </div>
    )
}
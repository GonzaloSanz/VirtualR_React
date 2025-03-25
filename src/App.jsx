import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-10 lg:mt-20 px-6">
                <Hero />
                <Features />
                <Workflow />
                <Pricing />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}

export default App;
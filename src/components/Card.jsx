import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Card() {
    return (
        <div className="card">
            <h1>Card component</h1>
            <Info/>
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
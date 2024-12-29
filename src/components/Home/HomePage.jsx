import About from "./About";
import Banner from "./Banner";
import Services from "./Services";


export default function HomePage() {
  return (
    <div className="min-h-screen">
        <Banner/>
        <About/>
        <Services/>
    </div>
  )
}

import Banner from "./components/Banner";
import Customer from "./components/Customer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import PricePlan from "./components/PricePlan";
import Service from "./components/service/Service";
import UserFeedback from "./components/feedback/UserFeedback";
import Footer from "./components/Footer";
import SmartWork from "./components/work/SmartWork";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Customer />
      <Service />
      <Banner />
      <SmartWork />
      <PricePlan />
      <UserFeedback />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Medical from "./components/Medical";
import Siteseeing from "./components/Siteseeing";
import BusinessTrip from "./components/BusinessTrip";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <p>supported by</p>
        <p>logo</p>
        <p>logo</p>
        <p>logo</p>
      </div>
      <Medical />
      <Siteseeing />
      <BusinessTrip />
    </div>
  );
}

export default App;

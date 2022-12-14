import { Route, Routes } from "react-router-dom";
import BusinessTrip from "./pages/businesstrip";
import Carrenting from "./pages/carrenting";
import Home from "./pages/home";
import HotelBooking from "./pages/hotelbooking";
import MedicalTourism from "./pages/medicaltourism";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Siteseeing from "./pages/siteseeing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/siteseeing" element={<Siteseeing />} />
      <Route path="/medicaltourism" element={<MedicalTourism />} />
      <Route path="/businesstrip" element={<BusinessTrip />} />
      <Route path="/hotelbooking" element={<HotelBooking />} />
      <Route path="/carrenting" element={<Carrenting />} />
    </Routes>
  );
}

export default App;

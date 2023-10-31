import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Flights from "./pages/flight/Flight";
// import CarRentals from "./pages/carRent/CarRent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flights />} />
        {/* <Route path="/carrent" element={<CarRentals />} /> */}
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

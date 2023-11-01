import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Flights from "./pages/flight/Flight";
import WebsiteInProgress from "./pages/WebsiteInProgress";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="flight" element={<Flights />} />
        <Route path="hotels" element={<List />} />
        <Route path="hotels/:id" element={<Hotel />} />
      </Route>
      <Route path="/*" element={<WebsiteInProgress />} />
    </Routes>
  );
}

export default App;

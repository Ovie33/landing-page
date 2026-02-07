import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Booking from "./Booking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/contact/Contact";
import { Highlights } from "./components/highlights/Highlights";
import { Home } from "./components/home/Home";
import { Qualifications } from "./components/qualifications/Qualifications";
import { EOG } from "./components/eog/EOG";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/eog" element={<EOG />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

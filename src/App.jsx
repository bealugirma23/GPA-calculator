import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [dark, setdark] = useState("dark");
   const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div class={dark} className={`${dark ? "bg-black": "bg-white"}`}>
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {window.location.pathname !== "/about" && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;

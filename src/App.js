import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./style/Home";
import { AllNews } from "./components/AllNews";
import { Weather } from "./components/Weather";
import { RegistrationForm } from "./components/RegistrationForm";
import { Contact } from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/all-news" element={<AllNews/>}></Route>
      <Route path="/weather" element={<Weather/>}></Route>
      <Route path="/registration-form" element={<RegistrationForm/>}></Route>
      <Route path="/contact-us" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

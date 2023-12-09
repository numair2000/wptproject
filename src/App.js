import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./style/Home";
import { Instructor } from "./components/Instructor";
import { Weather } from "./components/Weather";
import { RegistrationForm } from "./components/RegistrationForm";
import { Contact } from "./components/Contact";
import { Footer } from "./style/Footer";
function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/instructor" element={<Instructor/>}></Route>
      <Route path="/weather" element={<Weather/>}></Route>
      <Route path="/registration-form" element={<RegistrationForm/>}></Route>
      <Route path="/contact-us" element={<Contact/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

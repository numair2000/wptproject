import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { Instructor } from "./components/Instructor";
import { Facilities } from "./components/Facilities";
import { RegistrationForm } from "./components/RegistrationForm";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Courses } from "./components/Courses";
function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/instructor" element={<Instructor/>}></Route>
      <Route path="/courses" element={<Courses/>}></Route>
      <Route path="/facilities" element={<Facilities/>}></Route>
      <Route path="/registration-form" element={<RegistrationForm/>}></Route>
      <Route path="/contact-us" element={<Contact/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

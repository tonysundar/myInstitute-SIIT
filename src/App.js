import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { Routes,Route } from "react-router-dom";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
   <Navbar/>
  
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/AboutUs' element={<AboutUs/>}/>
   <Route path='/Projects' element={<Projects/>}/>
   <Route path='ContactUs' element={<ContactUs/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;

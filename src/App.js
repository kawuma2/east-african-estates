import Home from "./pages/Home";
import Lands from "./pages/Lands";
import SingleLand from "./pages/SingleLand";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import House from "./pages/House";

import { Routes, Route} from "react-router-dom";
import './App.css'
//import './cssfiles/blog.css'
import Navbar from "./components/Navbar";
import SingleHouse from "./pages/SingleHouse";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Bloginfo from "./pages/Bloginfo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/lands/:slug" element={<SingleLand />} />
        <Route path="/blog" element={<Blog />} />
        
        <Route path="/houses" element={<House />} />
        <Route path="/houses/:slug" element={<SingleHouse />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/blog/:slug" element={<Bloginfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

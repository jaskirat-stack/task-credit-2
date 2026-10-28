import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Banner from "./component/banner";
import About from "./component/about";
import Article from "./component/articlesection";
import Gallery from "./component/gallery";
import Contact from "./component/contact";
import Subscribe from "./component/subscribe";
import Footer from "./component/footer";
import FeaturedTutorials from "./component/tutorials";
import Post from "./pages/post";
import Login from "./pages/login";
import Signup from "./pages/signup";

import "./App.css";


function Home() {
  return (
    <>
      <Banner />
      <About />
      <Article />
      <FeaturedTutorials/>
      <Gallery />
      <Contact />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
         <Route path="/post" element={<Post />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
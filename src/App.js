import Header from "./components/Header";
import Hero from "./components/Hero";
import Special from "./components/Special";
import Product from "./components/Product";
import Place from "./components/Place";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Login from "./components/Signup";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
  <>
  <Header />
  <Login />
  <Signup />
  <main className="main">
    <Hero />
    <Special />
    <Product />
    <Place />
    <Blog />
    <Footer />
  </main>
  </>);
}

export default App;

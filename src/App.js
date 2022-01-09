import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import NavbarC from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavbarC />
      <Carousel/>
      <ProductList />
      <Footer/>
    </div>
  );
}

export default App;

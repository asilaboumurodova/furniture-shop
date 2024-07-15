import { ShopContextProvider } from "./context/shop-context";
import Contact from "./components/Contact";
import Furniture from "./components/Furniture";
import About from "./components/About";
import Header from "./components/Main";
import Shop from "./pages/shop/Shop";

function App() {
  return (
      <ShopContextProvider>
        <Header />
        <Furniture />
        <About />
        <Shop />
        <Contact />
      </ShopContextProvider>
  );
}

export default App;

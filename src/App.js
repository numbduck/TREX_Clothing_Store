import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import Header from "./components/header"
import { Cart } from "./pages/cart";
import { Products } from "./pages/products";
import { CartProvider } from "./cartContext";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})
function App() {

  return (
    <ChakraProvider theme={theme}>
    <CartProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Products/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
    </ChakraProvider>
  );
}

export default App;

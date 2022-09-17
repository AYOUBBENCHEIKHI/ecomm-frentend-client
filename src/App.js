import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Cart from "./components/cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/partials/Navbar";
import Profile from "./components/users/Profile";
import SignIn from "./components/users/SignIn";
import SignUp from "./components/users/SignUp";

function App() {
  return (
    <BrowserRouter>
        <CartProvider><Navbar/></CartProvider>
      <Routes>
        <Route path="/" element={<CartProvider><Home/></CartProvider>}/>
        <Route path="/cart" element={<CartProvider><Cart/></CartProvider>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

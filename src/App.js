
import { Route, Routes } from "react-router-dom";
import { Cart, FourOFourPage, HomePage, Login, ProductPage, Signup, ProductDetailsPage, WishList, Profile } from './pages'
import { Footer, Navbar } from './components'
import ScrollToTop from "./utils/ScrollToTop";


function App() {
  return (
    <>
    <ScrollToTop>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:productId' element={<ProductDetailsPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/*' element={<FourOFourPage/>}/>
      </Routes>
      <Footer/>
    </ScrollToTop>
    </>
  );
}

export default App;


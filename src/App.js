
import { Route, Routes } from "react-router-dom";
import { Cart, FourOFourPage, HomePage, Login, ProductPage, Signup, ProductDetailsPage } from './pages'
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
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<FourOFourPage/>}/>
      </Routes>
      <Footer/>
    </ScrollToTop>
    </>
  );
}

export default App;


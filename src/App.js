
import { Route, Routes } from "react-router-dom";
import { Cart, FourOFourPage, HomePage, Login, ProductPage, Signup } from './pages'
import { Navbar } from './components'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<FourOFourPage/>}/>
      </Routes>
    </>
  );
}

export default App;


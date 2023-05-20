import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages';
import Products from './pages/Products/Products';
import Carts from './pages/Carts/Carts';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import { useSelector } from "react-redux"


function App() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <Router>
      <Routes>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/' element={ <Home/>}/>
        <Route path='/products' element={ <Products/>}/> 
        <Route path='/carts' element={currentUser ?  <Carts/> : <Login/>} />
        <Route path='/productDetails/:id' element={currentUser ? <ProductDetails/> : <Login/>}/>
      </Routes>
    </Router>   
  );
}

export default App;
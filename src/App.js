import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import ProductPage from './pages/products';
import About from './pages/about';
import Feedback from './pages/contact';
import Cart from './pages/cart';
import Footer from './components/footer';
function App() {
  return (
    <div className="App flex-1">
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Feedback/>}/>
      <Route path='/cart' element={<Cart/>}/>
      {/* <Route path='/account' element={<Account/>}/> */}
    </Routes>

    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;

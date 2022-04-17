
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Checkout from './Pages/Checkout/Checkout';
import Blogs from './Pages/Blogs/Blogs'
import Aboutme from './Pages/Aboutme/Aboutme';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path ='/' element={<Home></Home>}></Route>
        <Route path ='/home' element={<Home></Home>}></Route>
       <Route path='/checkout' element={<Checkout></Checkout>}></Route>
       <Route path ='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<Aboutme></Aboutme>}></Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;

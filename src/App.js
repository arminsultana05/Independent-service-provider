
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Checkout from './Pages/Checkout/Checkout';
import Blogs from './Pages/Blogs/Blogs'
import Aboutme from './Pages/Aboutme/Aboutme';
import Login from './Pages/Login/Login'
import Notfound from './Pages/Notfound/Notfound';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path ='/' element={<Home></Home>}></Route>
        <Route path ='/home' element={<Home></Home>}></Route>
       <Route path='/checkout/:checkoutId' element={<RequireAuth>
        <Checkout></Checkout>
       </RequireAuth>}></Route>
       <Route path ='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<Aboutme></Aboutme>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            //For Navigation of Private component after Login Only
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/remove" element={<h1>remove Product Page</h1>} />
            <Route path="/logout" element={<h1>Logout Page</h1>} />
            <Route path="/profile" element={<h1>My Profile Page</h1>} />
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;

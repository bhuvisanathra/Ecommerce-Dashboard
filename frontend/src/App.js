import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            //For Navigation of Private component after Login Only
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product List Page</h1>} />
            <Route path="/add" element={<h1>Add Product Page</h1>} />
            <Route path="/update" element={<h1>Update Product Page</h1>} />
            <Route path="/remove" element={<h1>remove Product Page</h1>} />
            <Route path="/logout" element={<h1>Logout Page</h1>} />
            <Route path="/profile" element={<h1>My Profile Page</h1>} />
          </Route>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<h1>Product List Page</h1>} />
            <Route path="/add" element={<h1>Add Product Page</h1>} />
            <Route path="/update" element={<h1>Update Product Page</h1>} />
            <Route path="/remove" element={<h1>remove Product Page</h1>} />
            <Route path="/logout" element={<h1>Logout Page</h1>} />
            <Route path="/profile" element={<h1>My Profile Page</h1>} />
            <Route path="/Signup" element={<Signup />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

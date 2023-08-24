import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import { ShoppingCartProvider } from './Context/GlobalContext';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
      <ShoppingCartProvider>
        <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className="custom-toast-container"
        />
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/cart' element={<CartPage />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </ShoppingCartProvider>
    );
}

export default App;


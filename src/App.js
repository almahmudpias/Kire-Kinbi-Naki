import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header'
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';
import {CartProvider} from 'react-use-cart';

function App() {
  return (
    <>
      <CartProvider>
        <div>
          <div className='body'>
            <Header></Header>
            <Product> </Product>
            <Cart></Cart>
          </div>
        </div>
      </CartProvider>
    </>
  );

}

export default App;

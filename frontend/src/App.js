// import './App.css';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import CartProvider from './components/CartProvider';



// function App() {

//   return (
//     <>
//       <Header />
//       <main className='min-h-[78vh]'>
//         <Outlet />
    

//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;

import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContaxt';

function App() {
  return (
    <CartProvider>
      <Header />
      <main className='min-h-[78vh]'>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';
// import logo from '../assets/logo.png';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Search from './Search';
// import { FaRegCircleUser } from "react-icons/fa6";
// import useMobile from '../hooks/usemobile';
// import { BsCart4 } from "react-icons/bs";
// import { useCart } from '../components/CartContaxt';

// const Header = ({ searchQuery, setSearchQuery }) => {
//   const [isMobile] = useMobile();
//   const location = useLocation();
//   const isSearchPage = location.pathname === '/search';
//   const navigate = useNavigate();
//   const { getCartCount } = useCart();
//   const cartCount = getCartCount();
  
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const handleStorageChange = () => {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         setUser(storedUser);
//     };

//     // Listen for localStorage changes
//     window.addEventListener("storage", handleStorageChange);
//     handleStorageChange(); // Call it initially

//     return () => window.removeEventListener("storage", handleStorageChange);
// }, []);


//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate('/'); // Redirect to home page after logout
//   };

//   const redirectToLoginPage = () => {
//     navigate("/login");
//   };

//   const gotomycart = () => {
//     navigate('/cart');
//   };

//   const redirectToAdminPage = () => {
//     navigate('/admin');
//   };

//   return (
//     <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
//       {
//         !(isSearchPage && isMobile) && (
//           <div className="container mx-auto flex items-center px-2 justify-between">
//             {/* Logo */}
//             <div className='h-full'>
//               <Link to={"/"} className='h-full flex justify-center items-center'>
//                 <img src={logo} width={170} height={60} alt='logo' className='hidden lg:block' />
//                 <img src={logo} width={120} height={60} alt='logo' className='lg:hidden' />
//               </Link>
//             </div>

//             {/* Search */}
//             <div className='hidden lg:block'>
//               <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//             </div>

//             <div className='hidden lg:block'>
//               <button onClick={redirectToAdminPage} className='text-lg px-2'>Admin</button>
//             </div>

//             {/* User Section */}
//             <div className='flex items-center gap-4'>
//               {user ? (
//                 <div className='flex items-center gap-4'>
//                   <span className='text-lg font-semibold'>{user.name}</span>
//                   <button onClick={handleLogout} className='text-lg px-2 text-red-600'>Logout</button>
//                 </div>
//               ) : (
//                 <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
//               )}

//               {/* Cart Button */}
//               <button onClick={gotomycart} className='relative flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white'>
//                 <div className='animate-bounce'>
//                   <BsCart4 size={26} />
//                 </div>
//                 <div className='font-semibold'>
//                   <p>My Cart</p>
//                 </div>
//                 {cartCount > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
//                     {cartCount}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>
//         )
//       }

//       <div className='container mx-auto px-2 lg:hidden'>
//         <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       </div>
//     </header>
//   );
// };

// export default Header;




import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from '../hooks/usemobile';
import { BsCart4 } from "react-icons/bs";
import { useCart } from '../components/CartContaxt';
import axios from 'axios';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const navigate = useNavigate();
  const { getCartCount, clearCart } = useCart();
  const cartCount = getCartCount();
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleStorageChange = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    };

    // Listen for localStorage changes
    window.addEventListener("storage", handleStorageChange);
    handleStorageChange(); // Call it initially

    return () => window.removeEventListener("storage", handleStorageChange);
}, []);

  const handleLogout = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        try {
            await axios.post('http://localhost:5000/api/cart/clear', { userId });
        } catch (error) {
            console.error('Failed to clear cart:', error);
        }
    }
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    clearCart();
    setUser(null);
    navigate('/'); // Redirect to home page after logout
  };

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const gotomycart = () => {
    navigate('/cart');
  };

  const redirectToAdminPage = () => {
    navigate('/admin');
  };

  return (
    <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
      {
        !(isSearchPage && isMobile) && (
          <div className="container mx-auto flex items-center px-2 justify-between">
            {/* Logo */}
            <div className='h-full'>
              <Link to={"/"} className='h-full flex justify-center items-center'>
                <img src={logo} width={170} height={60} alt='logo' className='hidden lg:block' />
                <img src={logo} width={120} height={60} alt='logo' className='lg:hidden' />
              </Link>
            </div>

            {/* Search */}
            <div className='hidden lg:block'>
              <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>

            <div className='hidden lg:block'>
              <button onClick={redirectToAdminPage} className='text-lg px-2'>Admin</button>
            </div>

            {/* User Section */}
            <div className='flex items-center gap-4'>
              {user ? (
                <div className='flex items-center gap-4'>
                  <span className='text-lg font-semibold'>{user.name}</span>
                  <button onClick={handleLogout} className='text-lg px-2 text-red-600'>Logout</button>
                </div>
              ) : (
                <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
              )}

              {/* Cart Button */}
              <button onClick={gotomycart} className='relative flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white'>
                <div className='animate-bounce'>
                  <BsCart4 size={26} />
                </div>
                <div className='font-semibold'>
                  <p>My Cart</p>
                </div>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )
      }

      <div className='container mx-auto px-2 lg:hidden'>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
};

export default Header;

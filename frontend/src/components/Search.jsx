import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useMobile from '../hooks/usemobile';

const Search = ({ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobile] = useMobile();
    const [isSearchPage, setIsSearchPage] = useState(false);

    useEffect(() => {
        const isSearch = location.pathname === '/search';
        setIsSearchPage(isSearch);
    }, [location]);

    const redirectToSearchpage = () => {
        navigate('/search');
    };

    return (
        <div className='w-full h-full flex items-center'>
            <div className='w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200'>
                {
                    (isMobile && isSearchPage) ? (
                        <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
                            <FaArrowLeft size={20} />
                        </Link>
                    ) : (
                        <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
                            <IoSearch size={22} />
                        </button>
                    )
                }
                <div className='w-full h-full'>
                    {
                        !isSearchPage ? (
                            <div onClick={redirectToSearchpage} className='w-full h-full flex items-center'>
                                <TypeAnimation
                                    sequence={[
                                        'Search "milk"',
                                        1000,
                                        'Search "bread"',
                                        1000,
                                        'Search "sugar"',
                                        1000,
                                        'Search "paneer"',
                                        1000,
                                        'Search "chocolate"',
                                        1000,
                                        'Search "curd"',
                                        1000,
                                        'Search "rice"',
                                        1000,
                                        'Search "egg"',
                                        1000,
                                        'Search "chips"',
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </div>
                        ) : (
                            <div className='w-full h-full'>
                                <input
                                    type='text'
                                    placeholder='Search for atta dal and more.'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    className='bg-transparent w-full h-full outline-none'
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
import React from 'react';
import Slider from '../components/Slider.jsx';
import Atta from '../assets/productimg/Atta.png';
import baby from '../assets/productimg/baby.png';
import Subcategory_1 from '../components/Subcategory_1';
import Subcategory_2 from '../components/subcategory_2.jsx';
import banner from '../assets/banner.jpg';
import bannerMobile from '../assets/bannerMobile.jpg';
import Subcategory_3 from '../components/Subcategory_3.jsx';

const Home = () => {
  const categories = [

    {
      title: 'Atta, Rice & Dal',
      items: Array(8).fill(<Subcategory_1 />),
      seeAllLink: '/snacks-beverages',
      renderItem: (item) => item,
    },
    {
      title: 'Baby Care',
      items: Array(10).fill(<Subcategory_2 />),
      seeAllLink: '/household-supplies',
      renderItem: (item) => item,
    },{
      title:"Bakery & Biscuits",
      items:Array(10).fill(<Subcategory_3/>),
      seeAllLink:'/bakery',
      renderItem:(item)=>item,
    },{
      title:"Bakery & Biscuits",
      items:Array(10).fill(<Subcategory_3/>),
      seeAllLink:'/bakery',
      renderItem:(item)=>item,
    },{
      title:"Bakery & Biscuits",
      items:Array(10).fill(<Subcategory_3/>),
      seeAllLink:'/bakery',
      renderItem:(item)=>item,
    },{
      title:"Bakery & Biscuits",
      items:Array(10).fill(<Subcategory_3/>),
      seeAllLink:'/bakery',
      renderItem:(item)=>item,
    },{
      title:"Bakery & Biscuits",
      items:Array(10).fill(<Subcategory_3/>),
      seeAllLink:'/bakery',
      renderItem:(item)=>item,
    }
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto">
      <div className={`w-full h-full min-h-48 bg-blue-100 rounded ${!banner && 'animate-pulse my-2'}`}>
          <img src={banner} className="w-full h-full hidden lg:block" alt="banner" />
          <img src={bannerMobile} className="w-full h-full lg:hidden" alt="banner" />
        </div>

        {/* Category Section */}
        <div className="container mx-auto px-3 my-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center justify-center p-2">
              <img
                src={i < 5 ? Atta : baby}
                alt={`Category ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>


        {categories.map((category, index) => (
          <Slider
            key={index}
            title={category.title}
            items={category.items}
            seeAllLink={category.seeAllLink}
            renderItem={category.renderItem}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

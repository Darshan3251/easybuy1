
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductImageSlider from '../components/ImageSlide'
import image1 from '../assets/DescriptionImg/image1.png';

const ProductDetails = () => {
    const { id } = useParams();

    return (
        <section className="container mx-auto p-4 grid lg:grid-cols-2 gap-8">
            {/* Image Section left side*/}
            <ProductImageSlider/>

            {/* Details Section right side*/}
            <div className="space-y-3 mt-5">
                <p className="bg-green-300 w-fit px-2 rounded-full">10 Min</p>
                <h2 className="text-lg font-semibold lg:text-3xl">Kwality Whole Wheat Bread</h2>
                <p>1 Unit</p>
                <div className="h-[1px] bg-slate-200 my-2"></div>
                <div>
                    <p className="text-gray-700">Price</p>
                    <div className="flex items-center gap-4">
                        <div className="border border-green-600 px-4 py-2 rounded bg-green-50">
                            <p className="font-semibold text-lg lg:text-xl">₹480.00</p>
                        </div>
                        <p className="line-through text-gray-500">₹600.00</p>
                        <p className="font-bold text-green-600 lg:text-2xl">
                            20%
                            <span className="text-base text-neutral-500"> Discount</span>
                        </p>
                    </div>
                </div>
                <div className="my-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                        Add
                    </button>
                </div>
                <h2 className="font-semibold">Why shop from binkeyit?</h2>
                <div className="flex items-center gap-4">
                    <img src={image1} alt="Superfast Delivery" className="w-20 h-20 object-contain" />
                    <div className="text-sm">
                        <div className="font-semibold">Superfast Delivery</div>
                        <p>
                            Get your order delivered to your doorstep at the earliest from dark stores near you.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src={image1} alt="Superfast Delivery" className="w-20 h-20 object-contain" />
                    <div className="text-sm">
                        <div className="font-semibold">Best Prices & Offers</div>
                        <p>
                            Best price destination with offers directly from the nanufacturers.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src={image1} alt="Superfast Delivery" className="w-20 h-20 object-contain" />
                    <div className="text-sm">
                        <div className="font-semibold">Wide Assortment</div>
                        <p>
                            Choose from 5000+ products across food personal care, household & other categories.
                        </p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2 className="font-bold">Description</h2>
                    <p>Kwality Whole Wheat Bread</p>
                </div>

                <div className='mt-5'>
                    <h2 className="font-bold">Unit</h2>
                    <p>Unit 1</p>
                </div>

            </div>
        </section>
    );
};

export default ProductDetails;

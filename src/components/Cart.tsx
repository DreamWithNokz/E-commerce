import React, { useState, useEffect } from 'react';
import image1 from '../assets/image-product-1.jpg';
import Appdata, { BigImage } from '../Views/Appdata';

import nextIcon from '../assets/icon-next.svg';
import prevIcon from '../assets/icon-previous.svg';
import Navbar from './Navbar';
import plusIcon from '../assets/icon-plus.svg';
import Modal from './Modal';
import { ReactComponent as MinusIcon } from '../assets/icon-minus.svg';
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg';

type Props = {
  numberOfItems: number;
  setNumberOfItems: (num: number) => void;
}

const Cart: React.FC<Props> = ({numberOfItems, setNumberOfItems}) => {
  const [thumbnail, setThumbnail] = useState('');
  const [mainImage, setmainImage] = useState(0);

  console.log(mainImage);
  const CartBehavior = (image: any, index: number) => {
    setThumbnail(image);
    setmainImage(index);
  };

  return (
    <div className="lg:grid grid-cols-2 max-w-[1240px] mx-auto lg:mt-[96px]">
      <div className="hidden lg:flex flex-col">
        <div className="2xl:flex mx-[120px] my-5">
          <img
            className="w-full h-[400px] rounded-2xl"
            src={BigImage[mainImage]}
          ></img>
        </div>
        <div>
          <div className="flex flex-row gap-8 flex-wrap  px-[120px] w-full">
            {Appdata.map((image, index) => (
              <div key={index}>
                <img
                  onClick={() => {
                    CartBehavior(image, index);
                  }}
                  src={image}
                  className={
                    thumbnail === image
                      ? 'w-[70px] h-[70px] rounded-xl cursor-pointer bg-black outline outline-orange-500 opacity-75  '
                      : 'w-[70px] h-[70px] rounded-xl cursor-pointer '
                  }
                ></img>
                {/* <img
                  className="w-full h-[400px] rounded-2xl"
                  src={image[0]}
                ></img> */}
              </div>
            ))}
            ;
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="mt-0 lg:hidden my-5 flex relative">
          <img
            className="w-full h-[450px] relative"
            src={BigImage[mainImage]}
          ></img>
        </div>
        <div className=" absolute h-[50px] w-[50px] mt-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full bg-white/80 cursor-pointer">
          <img
            className="mx-auto mt-[30%]"
            src={nextIcon}
            onClick={() => {
              if (mainImage < 3) {
                setmainImage(mainImage + 1);
              }
            }}
          ></img>
        </div>

        <div className=" absolute h-[50px] w-[50px] mt-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full bg-white/80 cursor-pointer">
          <img
            className="mx-auto mt-[30%]"
            src={prevIcon}
            onClick={() => {
              if (mainImage > 0) {
                setmainImage(mainImage - 1);
              } else {
                mainImage == 0;
              }
            }}
          ></img>
        </div>

        <div className=" px-5 text-wrap lg:pt-[10%]">
          <p className="text-orange-text font-bold">SNEAKER COMPANY</p>
          <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
          <p className="pt-[30px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="grid grid-cols-3  pt-[30px] lg:grid-cols-4 grid-rows-2">
            <div>
              <h1 className="font-bold text-3xl">$125.00</h1>
            </div>
            <div className="pt-1 lg:pt-2">
              <span className="font-bold text-orange-text rounded-md bg-orange-400/20 p-[4px]">
                50%
              </span>
            </div>
            <div className="lg:col-start-1">
              <p className="font-bold text-gray-400 line-through">$250.00</p>
            </div>
          </div>
          <div className="lg:grid grid-cols-3 gap-x-4">
            <div className="lg:col-start-1 p-5 my-5 bg-gray-100 rounded-md flex justify-between ">
              <div className="my-auto">
                <MinusIcon
                  fill="black"
                  onClick={() => {
                    if (numberOfItems > 0) {
                      setNumberOfItems(numberOfItems - 1);
                    }
                  }}
                />
              </div>
              <div>
                <p className="text-center">{numberOfItems}</p>
              </div>
              <div className="my-auto">
                <img
                  className=""
                  src={plusIcon}
                  onClick={() => {
                    setNumberOfItems(numberOfItems + 1);
                  }}
                ></img>
              </div>
            </div>
            <button
              className="w-full lg:col-start-2 col-span-3 p-5 my-5 bg-orange-text rounded-md flex justify-center "
              onClick={() => {
                console.log('click');
                console.log(numberOfItems);
              }}
            >
              <div className="mr-5 ">
                <CartIcon stroke="white" fill="red" />
              </div>
              <p className="text-xl text-white">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

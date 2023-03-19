import React, { SetStateAction, Dispatch, useEffect } from 'react';
import Image1 from '../assets/image-product-1.jpg';
import { ReactComponent as Icondelete } from '../assets/icon-delete.svg';

// interface modalProps {
//   CloseModal: (close: boolean) => void;
// }

type modalProps = {
  AddCart?: number;
};

const Modal: React.FC<modalProps> = ({ AddCart }: modalProps) => {
  return (
    <div className="fixed h-[200px] w-[350px] mt-[17%] bg-white rounded-xl shadow-2xl">
      <div className="font-bold file:w-full h-[60px] flex  p-5 items-center border-b border-black ">
        Cart
      </div>

      <div className=" w-full h-[60px] flex  p-5 items-center mt-3">
        <img src={Image1} className="h-[50px] rounded-xl mr-5"></img>
        <div className="flex flex-col w-full">
          <p>Autumn Limited Edition...</p>
          <p>$125 {AddCart} $125</p>
        </div>
        <div className="ml-5">
          <Icondelete className=" items-center rounded-xl " />
        </div>
      </div>
      <div className="mx-5 mt-3 ">
        <button className="w-full p-2 bg-orange-text rounded-md ">
          <div className="mr-5 "></div>
          <p className="text-xl text-white">Check out</p>
        </button>
      </div>

      <button className="text-black">X</button>
    </div>
  );
};

export default Modal;

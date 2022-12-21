import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  return (
    <div className="absolute right-10 bg-white space-y-5  text-gray-600 z-30 p-3 shadow-2xl">
      <h1 className="w-[400px] p-1 text-xl font-semibold">
        Product in your cart
      </h1>
      <div className=" flex gap-2 items-center shadow-sm p-2">
        <span>1.</span>
        <div className="w-24 h-24 ">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Image"
            srcset=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className=" font-semibold">Shirt For Men</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <p className="text-blue-500">1 * $15.9</p>
        </div>
        <DeleteOutlinedIcon className="text-red-500 m-1" />
      </div>

      <div className=" flex gap-2 items-center shadow-sm p-2">
        <span>1.</span>
        <div className="w-24 h-24 ">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Image"
            srcset=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className=" font-semibold">Shirt For Men</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <p className="text-blue-500">1 * $15.9</p>
        </div>
        <DeleteOutlinedIcon className="text-red-500 m-1" />
      </div>

      <div className=" flex gap-2 items-center shadow-sm p-2">
        <span>1.</span>
        <div className="w-24 h-24 ">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Image"
            srcset=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className=" font-semibold">Shirt For Men</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <p className="text-blue-500">1 * $15.9</p>
        </div>
        <DeleteOutlinedIcon className="text-red-500 m-1" />
      </div>

      <div className="flex justify-between mt-5">
        <h1 className="text-lg font-semibold">SUBTOTAL</h1>
        <h1 className="text-lg font-semibold">$19.99</h1>
      </div>

      <button className="bg-blue-400 px-6 py-2 text-white font-semibold">
        PROCEED TO CHECKOUT
      </button>

      <div className="text-red-500">Reset Cart</div>
    </div>
  );
};

export default Cart;

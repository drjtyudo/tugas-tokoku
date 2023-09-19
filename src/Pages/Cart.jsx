import React from "react";
import Cards from "../Components/Card/Card";

const Cart = () => {
  return (
    <div className="px-[100px]">
      <h3 className="border-l-4 border-blue-400 ps-3 text-[20px] font-semibold mt-10">
        Keranjang
      </h3>
      <hr className="my-5" />
      <div className="flex gap-40">
        <div>
          <Cards.CardCheckOut />
          <Cards.CardCheckOut />
          <Cards.CardCheckOut />
          <Cards.CardCheckOut />
        </div>
        <div className="border-2 border-grey-500 w-[500px] h-[300px] p-5 mt-5">
          <h1 className="text-[18px] font-semibold">Detail Pesanan</h1>
          <hr />

          <h5 className="text-center mt-20 text-gray-500">Belum ada pesanan</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;

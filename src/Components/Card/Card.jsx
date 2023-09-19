import { useEffect, useState } from "react";

const Cards = {
  CardKategori: ({ img, title, desc, price, stock }) => {
    const [barangDataList, setBarangDataList] = useState([]);

    useEffect(() => {
      const storedData = localStorage.getItem("barangDataList");
      if (storedData) {
        setBarangDataList(JSON.parse(storedData));
      }
    }, []);

    const handleAdd = (img, title, desc, price, stock) => {
      const newBarangData = {
        image: `${img}`,
        title: `${title}`,
        desc: `${desc}`,
        stock: stock,
        price: `${price}`,
      };
      setBarangDataList([...barangDataList, newBarangData]);
      // localStorage.setItem('barangDataList', JSON.stringify(barangDataList));
      // alert('Data telah disimpan ke Local Storage.');
    };

    console.log(barangDataList);
    return (
      <div className="h-[400px] w-[220px] border rounded-[10px] p-2 flex flex-col">
        <img
          className="h-[160px] w-[100%] rounded-tl-[10px] rounded-tr-[10px] object-cover"
          src={img}
          alt=""
        />
        <h1 className="text-[20px] font-semibold">{title}</h1>
        <p className="text-green-400 my-2">{price}</p>
        <p className="text-[14px] text-gray-400">{desc}</p>
        <button className="bg-blue-400 text-white mt-4 py-2 rounded-[8px]">
          Order Now
        </button>
        <button
          className="bg-orange-400 text-white mt-2 py-2 rounded-[8px]"
          onClick={() => handleAdd(img, title, desc, stock, price)}
        >
          Add to cart
        </button>
      </div>
    );
  },
  CardSlider: () => {
    const bgImg = "/images/bag.jpg";
    return (
      <div
        className="w-[150px] h-[150px] rounded-[10px] flex items-center justify-center bg-cover bg-no-repeat brightness-75"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h5 className="text-[20px] text-white font-semibold">OUTFIT</h5>
      </div>
    );
  },
  CardCheckOut: () => {
    return (
      <div className="w-[500px] h-[200px] flex border rounded-lg gap-4 p-2 pe-3 my-5">
        <img
          className="h-auto object-cover rounded-lg"
          src="/images/bag.jpg"
          alt=""
        />
        <div>
          <h5 className="text-[20px] font-medium text-gray-700">Outfit Man</h5>
          <p className="text-[14px] text-gray-500 my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
            quibusdam. ...
          </p>
          <div className="flex justify-between">
            <p>x5 item</p>
            <p className="text-green-400">RP.50.000.00</p>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button className="bg-red-400 text-white rounded-md px-3 py-1">
              Cancel
            </button>
            <button className="bg-blue-400 text-white rounded-md px-3 py-1" onClick={() => confirm("test")}>
              CheckOut
            </button>
          </div>
        </div>
      </div>
    );
  },
};

export default Cards;

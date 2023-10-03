// src/components/Navbar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Input from "../Input/Input";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 px-10 py-4 flex justify-between">
        <h1 className="text-white text-[24px] font-bold">Toko Ku</h1>
        <Input.InputText width="400" placeholder="Cari Barang Anda ..." />
        <div className=" flex gap-3">
          <div className="flex gap-4 me-12">
            <Link to="/">
              <i className="bi bi-house-door text-white text-[28px]"></i>
            </Link>
            <Link to="/cart">
              <i className="bi bi-cart-check text-white text-[28px]"></i>
            </Link>
          </div>

          <Link to="/login">
            <button className="bg-white py-2 px-4 rounded-[6px]">Masuk</button>
          </Link>
          <Link to="/register">
            <button className="bg-purple-400 py-2 px-4 rounded-[6px] text-white">
              Daftar
            </button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

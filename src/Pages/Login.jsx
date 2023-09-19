import React from "react";
import Input from "../Components/Input/Input";
import { Link } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import Footer from "../Components/Layouts/Footer";

const Login = () => {
  return (
    <>
      <div className="flex px-10 justify-between items-center h-[100vh]">
        <img src="/images/vector1.svg" alt="" />
        <div>
          <div className="flex gap-2 mb-5">
            <i class="bi bi-caret-left"></i>
            <Link to="/">
              <p>Kembali</p>
            </Link>
          </div>
          <form className="flex flex-col gap-y-3 w-[500px] me-[100px] border-2 border-[#8dafe2] px-16 py-10 rounded-[10px]">
            <h1 className="text-[25px] text-[#5166dd] text-center font-semibold mb-5">
              Login
            </h1>
            <Input.InputText placeholder="Username or email" />
            <Input.InputPassword />
            <Input.InputSubmit />
            <p className="text-center text-[#444444]">
              Belum Memiliki akun ?
              <Link to="/register">
                <span className="text-[#5166dd]"> Daftar di sini</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
      </>
  );
};

export default Login;

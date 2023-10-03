import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input/Input";
import MainLayout from "../Components/Layouts/MainLayout";

const Register = () => {
  return (
    <div>
      <MainLayout showHeader={false}>
        <div className="flex px-10 justify-between items-center h-[100vh]">
          <img src="/images/vector1.svg" alt="" />
          <div>
            <div className="flex gap-2 mb-5">
              <i className="bi bi-caret-left"></i>
              <Link to="/">
                <p>Kembali</p>
              </Link>
            </div>
            <form className="flex flex-col gap-y-3 w-[500px] me-[100px] border-2 border-[#8dafe2] px-16 py-10 rounded-[10px]">
              <h1 className="text-[25px] text-[#5166dd] text-center font-semibold mb-5">
                Register
              </h1>
              <Input.InputText placeholder="Username" />
              <Input.InputText placeholder="Email@example.com" />
              <Input.InputPassword />
              <Input.InputSubmit />
              <p className="text-center text-[#444444]">
                Sudah Memiliki akun ?
                <Link to="/login">
                  <span className="text-[#5166dd]"> Masuk di sini</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Register;

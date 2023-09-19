import React from "react";

const Category = ({ Category, children }) => {
  return (
    <div className="px-20 pb-10">
      <h1 className="text-[24px] font-semibold my-5 px-3 border-l-4 border-blue-400">{Category}</h1>
      <div className="flex gap-4 flex-wrap">{children}</div>
    </div>
  );
};

export default Category;

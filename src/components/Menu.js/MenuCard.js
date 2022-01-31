import React from "react";

const MenuCard = ({ cupcake: { img, title, description, price } }) => {
  return (
    <li className=" flex flex-col items-center justify-center mx-auto m-20  w-384 h-400 rounded-xl bg-gray-300">
      <img
        src={img}
        alt={title}
        className="rounded-full  w-200 h-200 flex  items-center justify-center  "
      />
      <div className="flex flex-col    my-auto">
        <div className=" flex  items-center justify-between mx-20">
          <h2>{title}</h2>
          <p>${price}</p>
        </div>
        <p className="p-10 tracking-tighter">{description}</p>
        <div className="flex items-center justify-end">
          <button>Add cart</button>
        </div>
      </div>
    </li>
  );
};

export default MenuCard;

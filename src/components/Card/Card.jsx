import React from "react";

const Card = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  btnHref,
}) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <img src={image} alt="" className="w-full h-48 object-cover" />
      <div className="p-6 text-center">
        <h3
            className="mb-3 block text-xl font-semibold text-gray-800"
          >
            {CardTitle}
        </h3>
        <p className="mb-5 text-gray-600">{CardDescription}</p>

        {Button && (
          <a
            href={btnHref || "#"}
            className="inline-block rounded-full border border-[#695aa6] px-6 py-2 text-sm font-medium text-[#695aa6] hover:text-white hover:bg-[#695aa6] hover:text-white transition"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};


export default Card;
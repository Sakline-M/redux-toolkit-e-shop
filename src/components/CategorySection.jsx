/* eslint-disable no-unused-vars */
import React from "react";
import KidCategory from "../assets/images/kid.jpg";
import WomenCategory from "../assets/images/women.jpg";
import MenCategory from "../assets/images/men.jpg";

const categories = [
  {
    title: "Men",
    imgUrl: MenCategory,
  },
  {
    title: "Women",
    imgUrl: WomenCategory,
  },
  {
    title: "Kids",
    imgUrl: KidCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-5 cursor-pointer">
      {categories.map((data, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105"
        >
          <img src={data.imgUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>

          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{data.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;

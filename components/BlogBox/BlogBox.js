import Image from "next/image";
import React from "react";

export default function BlogBox() {
  return (
    <div>
      <div className="relative">
        <Image
          src="https://a.cdn-hotels.com/gdcs/production38/d1315/09f1d34e-5c3b-4fb9-b431-3641399c2c77.jpg"
          width={80}
          height={80}
          className="w-full rounded-md"
        />
        <h1 className="uppercase text-orange-400 font-medium mt-3 tracking-wider">
          health & fitness
        </h1>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-2 uppercase text-gray-700">
          5 Ways to Help Your Child Focus During Remote Learning
        </h1>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptates voluptatibus
          exercitationem quos voluptate quod quibusdam, quia, quae voluptates
          voluptatibus exercitationem quos voluptate quod
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { PortifolioProps } from "../data/portifolio";

function PortfolioItem({ title, imgUrl, description, link }: PortifolioProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="relative w-full md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-base md:text-xl dark:text-white mb-2 md:mb-3 font-semibold text-center ">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;

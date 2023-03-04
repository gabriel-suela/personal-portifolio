import React from "react";
import { PortifolioProps } from "../data/portifolio";

function PortfolioItem({ title, imgUrl, description, link }: PortifolioProps) {
  return (
    <div>
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
      </a>
      <div className="w-full p-4 text-center">
        <h3 className="text-base md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>

        <p className="mt-2 text-base">Detalhes</p>
      </div>
    </div>
  );
}

export default PortfolioItem;

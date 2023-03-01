import React from "react";
import { PortifolioProps } from "../data/portifolio";
import { portifolio } from "../data/portifolio";
import PortifolioItem from "./PortifolioItem";

export default function Portifolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portifolio.map((project, index) => (
          <PortifolioItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

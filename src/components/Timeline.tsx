import React from "react";
import { timeline } from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

export default function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 ">
      <div className="w-full md:w-7/12">
        <Title>Experiências</Title>
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            year={item.year}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

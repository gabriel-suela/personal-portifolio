import React from "react";
import { TimelineProps } from "../data/timeline";

export default function TimelineItem({ year, title, details }: TimelineProps) {
  return (
    <ol className="flex flex-col md-flex-row relative border-l dark:border-stone-200 border-stone-400">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-orange-300 rounded-full mt-1.5 -left-1.5 " />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 dark:bg-white dark:text-stone-900 rounded-md">
            {year}
          </span>
          <h3 className="lg:text-lg sm:text-md font-semibold text-stone-900 dark:text-stone-300">
            {title}
          </h3>
        </div>
      </li>
    </ol>
  );
}

import React from "react";

type TitleProps = {
  //   id: string;
  children: string;
};

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-3 mb-5 text-stone-900 dark:text-stone-300">
      {children}
    </h1>
  );
}

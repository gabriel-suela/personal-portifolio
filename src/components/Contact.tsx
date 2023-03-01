import React from "react";
import Title from "./Title";

export default function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/62d1e2d5-65cb-4de5-bb79-5fef83f57ea7"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contato</Title>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="p-2 bg-transparent border border-stone-500 dark:border-stone-200 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-4 p-2 bg-transparent border border-stone-500 dark:border-stone-200 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            rows={10}
            className="p-2 mb-4 bg-transparent border border-stone-500 dark:border-stone-200 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Entre em contato
          </button>
        </form>
      </div>
    </div>
  );
}

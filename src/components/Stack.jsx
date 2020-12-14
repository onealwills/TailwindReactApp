import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import index from "react-typical";
import content from "./content";

export default function Stack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mt-10 text-5xl font-bold">Stack i use</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={`${
                index % 2 === 0 ? "animate-float" : "animate-refloat"
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex item-center p-6`}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 font-bold">
        {content.stack.desc}
      </p>
    </div>
  );
}

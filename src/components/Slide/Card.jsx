import React from "react";

const Card = ({ img, title, number, description }) => {
  return (
    <main className="w-[100%] mb-36">
      <section className="flex flex-col gap-4 p-5">
        <img className="h-[250px] w-[100%] object-cover" src={img} alt={title} />
        <div className="flex">
          <div className="relative left-2">
            <strong className="text-5xl px-4">{number}</strong>
            <h4 className="text-xs bg-[#F9841A] px-4 py-4 text-white font-semibold mt-4">Feb 2024</h4>
          </div>
          <div className="relative left-2">
            <h3 className="text-[14px] px-2 py-2 font-semibold">{title}</h3>
            <p className="text-[12px] px-2 py-0">
              {description}
              <button>
                <a href="#" className="text-sm text-[#F9841A] font-bold px-2">
                  Read More
                </a>
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Card;

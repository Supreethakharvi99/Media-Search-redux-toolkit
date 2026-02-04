import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="relative w-[280px] h-[300px] bg-white overflow-hidden">
      <div className="h-full">
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </div>

      <div
        id="bottom"
        className="absolute bottom-0 w-full h-[40%] px-6 py-10 text-white"
      >
        <h2 className="text-m font-semibold capitalize">{item.title}</h2>
      </div>
    </div>
  );
};

export default ResultCard;

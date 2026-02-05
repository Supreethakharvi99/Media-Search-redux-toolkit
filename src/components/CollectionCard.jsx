import React from "react";
import { useDispatch } from "react-redux";
import { toast, Zoom } from "react-toastify";
import { removeCollection } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    toast.error("Removed from the collection", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  };
  return (
    <div className="relative w-[280px] h-[300px] bg-white rounded-xl overflow-hidden">
      <a target="_blank" href={item.url} className="h-full">
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
      </a>

      <div
        id="bottom"
        className="flex justify-between items-center absolute bottom-0 w-full h-[40%] px-6 py-6 gap-2 text-white"
      >
        <h2 className="text-m h-12 font-semibold capitalize overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className=" bg-gradient-to-r from-gray-600 to-cyan-700  text-white rounded font-small px-3 py-1 cursor-pointer active:scale-95 "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;

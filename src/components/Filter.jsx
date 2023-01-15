import React from "react";
import { useDispatch } from "react-redux";
import { filterClicked, openEmail } from "../action";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex font-normal items-center">
      <div className="text-md">
        <span>Filter By :</span>
      </div>
      <div className="flex space-x-10 ml-20">
        <button
          className="hover:bg-[#CFD2DC] active:bg-[#CFD2DC] focus:outline-none focus:ring focus:ring-gray-600 rounded-xl px-6 cursor-pointer border-2 border-solid transparent"
          onClick={() => {
            dispatch(filterClicked("Unread"));
            dispatch(openEmail(null));
          }}
        >
          Uread
        </button>
        <button
          className="hover:bg-[#CFD2DC] active:bg-[#CFD2DC] focus:outline-none focus:ring focus:ring-gray-600 rounded-xl px-6 cursor-pointer border-2 border-solid transparent"
          onClick={() => {
            dispatch(filterClicked("Read"));
            dispatch(openEmail(null));
          }}
        >
          Read
        </button>
        <button
          className="hover:bg-[#CFD2DC] active:bg-[#CFD2DC] focus:outline-none focus:ring focus:ring-gray-600 rounded-xl px-6 cursor-pointer border-2 border-solid transparent"
          onClick={() => {
            dispatch(filterClicked("Favorites"));
            dispatch(openEmail(null));
          }}
        >
          Favorites
        </button>
      </div>
    </section>
  );
};

export default Filter;

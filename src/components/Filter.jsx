import React from "react";
import { useDispatch } from "react-redux";
import { filterClicked, openEmail } from "../action";

const Filter = () => {
  const dispatch = useDispatch();

  const addSelectedClass = (e) => {
    let element = document.getElementById("filter-btn");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
  };
  return (
    <section className="flex font-normal items-center">
      <div className="text-md">
        <span>Filter By :</span>
      </div>
      <div className="flex space-x-10 ml-20">
        <span
        id="filter-btn"
          className="filter-btn hover:bg-[#CFD2DC] rounded-xl px-6 cursor-pointer border-2 border-solid transparent"
          onClick={(e) => {
            dispatch(filterClicked("Unread"));
            dispatch(openEmail(null));
            addSelectedClass(e);
          }}
        >
          Uread
        </span>
        <span
        id="filter-btn"
          className="filter-btn hover:bg-[#CFD2DC] rounded-xl px-6 cursor-pointer border-2 border-solid transparent"
          onClick={(e) => {
            dispatch(filterClicked("Read"));
            dispatch(openEmail(null));
            addSelectedClass(e);
          }}
        >
          Read
        </span>
        <span
        id="filter-btn"
          className="filter-btn hover:bg-[#CFD2DC] rounded-xl px-6 cursor-pointer border-2 border-solid transparent"
          onClick={(e) => {
            dispatch(filterClicked("Favorites"));
            dispatch(openEmail(null));
            addSelectedClass(e);
          }}
        >
          Favorites
        </span>
      </div>
    </section>
  );
};

export default Filter;

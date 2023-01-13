import React from "react";

const EmailList = () => {
  return (
    <section className="w-full">
      <div className="flex gap-4 border-2 border-solid border-[#CFD2DC] mb-4 hover:cursor-pointer hover:border-[#E54065]">
        <div className="my-2 ml-8">
          <p className="text-white bg-[#E54065] rounded-full px-5 py-3 text-2xl">
            {"F"}
          </p>
        </div>
        <div className="flex flex-col my-2">
          <div className="mx-4">
            <span>From: </span>
            <span className="font-semibold text-sm">
              Foo Bar
              {"  <alert@gmail.com>"}
            </span>
          </div>
          <div className="mx-4">
            <span>Subject: </span>
            <span className="font-semibold text-sm">Lorel Ipsum</span>
          </div>
          <div className="mx-4">
            <p className="m-px text-ellipsis whitespace-nowrap overflow-hidden w-[320px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>
        <div className='mx-4 mt-2'>
          <p className="text-xs">26/02/2020 10:30am</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default EmailList;

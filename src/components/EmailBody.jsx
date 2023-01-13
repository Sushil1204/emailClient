import React from "react";

const EmailBody = () => {
  return (
    <section className="flex gap-4 h-max bg-[#F2F2F2] text-[#636363] border-2 border-solid border-[#CFD2DC] rounded-md p-4 m-0">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <div className='flex space-x-4 items-center'>
            <p className="text-white bg-[#E54065] rounded-full px-5 py-3 text-xl">
              {"F"}
            </p>
            <div className="flex-col space-y-4">
              <h1 className='text-xl'>Lorel Ipsum</h1>
              <p className="text-xs">12/06/2020 10:30 am</p>
            </div>
          </div>
          <div className="mx-auto my-auto">
            <button className="border-solid text-white font-semibold text-xs rounded-full cursor-pointer bg-[#E54065] px-2 py-2">
              Mark as favourite
            </button>
          </div>
        </div>
        <div className="my-4">
          <p className="text-sd">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes
            of Good and Evil by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailBody;

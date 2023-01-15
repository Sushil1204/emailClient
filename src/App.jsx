import React, { useState } from "react";
import Filter from "./components/Filter";
import EmailList from "./components/EmailList";
import EmailBody from "./components/EmailBody";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="container">
        <Filter />
        <main className="flex w-full space-x-4 my-4">
          <EmailList />
          <EmailBody />
        </main>
      </div>
      {visible && (<button
        class="bg-[#E54065] text-white font-bold py-2 px-4 rounded-full float-right mb-4 mr-4 outline-none"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate-bounce w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
            clipRule="evenodd"
          />
        </svg>
      </button>)}
    </>
  );
}

export default App;

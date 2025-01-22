import React, { useState } from "react";

function Maahmaah() {
  const Quotes = [
    "1. Nin Sexday Sicii Dibi Dhal",
    "2. Canjeero Sidee Ukala Horesa Loo Kala Cunaa",
    "3. Aqoon La'aan Waa Iftiin La'aan",
    "4. Af daboolan Waa Dahab",
    "5. Far Kaligeed Fool MA Dhaqdo",
    "6. Inta Aadan Falin KA Fiirso",
    "7. Qunyar Usocod Qodax Ma Mudo",
    "8. Aar Qoyaay Dawaco Lamooda",
    "9. Inta Aadan Falin KA Fiirso",
    <div className="">
    <p className="text-red-600 mb-4">Dhamaad</p>
    "10. Nin Tuur Leh Siduu U Sexdo Asigaa Yaqan"
    </div>,
  ];

  const [index, setIndex] = useState(0);
  const [textColor, setTextColor] = useState();

  const handleNextClick = () => {
    if (index < Quotes.length - 1) {
      setIndex(index + 1);
      handleColor(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
      handleColor(index - 1);
    }
  };

  const handleColor = (index) => {
    if (index === 3) {
      setTextColor("red");
    } else {
      setTextColor("black");
    }
  };

   

  return (
    <div className="text-center mt-40">
        {/* <p style={{display: index === Quotes.length-1 ? "block" : "none"}} className="bg-red-600 text-5xl sm:pl-10 font-bold ">Dhamaad</p> */}
      <h1 className="text-4xl font-semibold" style={{ color: textColor }}>
        {Quotes[index]}
      </h1>
      <div className="mt-6">
        <button
          onClick={handlePrevClick}
          className="bg-blue-600 text-white font-bold text-xl rounded-lg px-8 py-2"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="bg-blue-600 text-white font-bold text-xl rounded-lg  sm:ml-20 px-8 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Maahmaah;
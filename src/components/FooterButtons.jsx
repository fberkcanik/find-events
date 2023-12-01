import React from "react";

function FooterButtons() {
  /* Yardım, Sıkça Sorulan Sorular, Bize Ulaşın */
  return (
    <>
        <div className="flex flex-row items-center justify-center space-x-6">
            <button className="text-white text-sm">Yardım</button>
            <button className="text-white text-sm">Sıkça Sorulan Sorular</button>
            <button className="text-white text-sm">Bize Ulaşın</button>
        </div>
    </>
  );
}

export default FooterButtons;

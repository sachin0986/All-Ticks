import React from "react";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import HeaderItems from "./HeaderItems";
import HeaderData from "../utils/data";

const style = {
  header: `p-4 flex justify-between`,
  mainLogo: `p-8 text-xl flex text-blue-500`,
  button: `p-4 items-center h-10 rounded-md flex bg-sky-300 hover:bg-sky-500`,
  buttonContainer: `p-8`,
  List: `flex text-gray-600`
};

const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <a href="/" className={style.mainLogo}>
          <PiPaperPlaneTiltLight size={30} />
          ll Ticks
        </a>
      </div>
      <div className={style.List}>
        {HeaderData.map((hdata) => (
          <HeaderItems key={hdata.id} hedData={hdata} />
        ))}
      </div>

      <div className={style.buttonContainer}>
        <button className={style.button}>
          <PiPaperPlaneTiltLight size={20} />
          LogIn
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import USA_flag from "./FlagIcons/usa.png";
import Afg_flag from "./FlagIcons/afg.png";

const LanguageBar = () => {
  return (
    <div className='bg-light' style={{ height: "30px", position: "relative" }}>
      <div className='container'>
        <div className='dropdown'>
          <button
            className='btn btn-sm bg-light'
            type='button'
            id='dropdownLanguage'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            style={{ position: "absolute" }}
          >
            <span>
              <i className='fa fa-language' aria-hidden='true'></i>{" "}
            </span>
            Language
          </button>
          <div className='dropdown-menu ' aria-labelledby='dropdownLanguage'>
            <a className='dropdown-item p-1' href='/english'>
              <img src={USA_flag} alt='usa flag' /> English
            </a>
            <a className='dropdown-item p-1' href='/pashto'>
              <img src={Afg_flag} alt='afg flag' /> پشتو
            </a>
            <a className='dropdown-item p-1' href='/dari'>
              <img src={Afg_flag} alt='afg flag' /> دری
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageBar;

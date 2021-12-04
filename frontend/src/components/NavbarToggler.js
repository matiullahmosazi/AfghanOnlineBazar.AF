import React from "react";
import fabric from "./TogglerIcons/fabric.png";
import supermarket from "./TogglerIcons/groceries.png";
import books from "./TogglerIcons/Books_.png";
import women_fashion from "./TogglerIcons/traditional-dress.png";
import men_fashion from "./TogglerIcons/cotton-polo-shirt.png";
import home_office from "./TogglerIcons/machine.png";
const NavbarToggler = () => {
  return (
    <div>
      <div className='leftSideSearch'>
        <div className='dropdown'>
          <button
            className='btn '
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span
              className='navbar-toggler-icon'
              style={{ fontSize: "20px", fontWeight: "700" }}
            ></span>{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "700"
              }}
            >
              By Categories
            </span>
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <a className='dropdown-item' href='/action'>
                <img
                  src={fabric}
                  alt='fabrics'
                  style={{ height: "40px", width: "40px" }}
                />
                Afghan made
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/anaction'>
                <img
                  src={supermarket}
                  alt='fabrics'
                  style={{ height: "40px", width: "40px" }}
                />
                Supermarkets
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/something'>
                <img
                  src={books}
                  alt='fabrics'
                  style={{ height: "40px", width: "40px" }}
                />
                Books & Education
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/something'>
                <img
                  src={home_office}
                  alt='fabrics'
                  style={{ height: "40px", width: "40px" }}
                />
                Home & Office
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/something'>
                <img
                  src={men_fashion}
                  alt='fabrics'
                  style={{ height: "40px", width: "40px" }}
                />
                Mens' Fashion
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/something'>
                <img
                  src={women_fashion}
                  alt='fabrics'
                  style={{ height: "40px", width: "40px" }}
                />
                Womens' Fashion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarToggler;

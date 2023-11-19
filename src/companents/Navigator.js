import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import md5 from "md5";
import Avatar from "@mui/material/Avatar";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "flowbite-react";

function Navigator() {
  const user = useSelector((store) => store.user);
  const categories = useSelector((state) => state.global?.categories);
  let womanItem = [];
  let manItem = [];
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].gender === "k") {
      womanItem.push(categories[i]);
    } else {
      manItem.push(categories[i]);
    }
  }

  return (
    <div className=" text-colors-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-colors-lacivert ">
            Bandage
          </h3>
        </div>
        <div className="text-colors-gray list-none flex flex-col space-x-3 items-center mb-4 flex-wrap md:mb-0 md:flex md:flex-row">
          <Link className="text-colors-gray no-underline" to="/">
            <li>Home</li>
          </Link>
          <Link
            className="text-colors-gray no-underline flex flex-row"
            to="/shopping"
          >
            <li>Shop</li>
            <div className=" flex flex-row">
              <Dropdown inline className="flex font-semibold">
                {/* Left side for Kadın */}
                <div className="flex flex-col">
                  <span>Kadın</span>
                  {womanItem.map((item) => (
                    <Dropdown.Item key={item.id} className="flex flex-col">
                      <Link
                        className="no-underline text-colors-gray font-normal"
                        to={`/shopping/kadın/${String(
                          item.title
                        ).toLocaleLowerCase()}`}
                      >
                        Kadın&nbsp;{item.title}
                      </Link>
                    </Dropdown.Item>
                  ))}
                </div>

                <div className="flex flex-col">
                  <span>Erkek</span>
                  {manItem.map((item) => (
                    <Dropdown.Item key={item.id} className="flex flex-col">
                      <Link
                        className="no-underline text-colors-gray font-normal"
                        to={`/shopping/erkek/${String(item.title.toLowerCase)}`}
                      >
                        Erkek&nbsp;{item.title}
                      </Link>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </div>
          </Link>

          <Link className="text-colors-gray no-underline" to="/about">
            <li>About</li>
          </Link>
          <Link className="text-colors-gray no-underline" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="text-colors-gray no-underline" to="/team">
            <li>Team</li>
          </Link>
        </div>
        <div className="text-colors-blue flex items-center space-x-2">
          <IoPersonOutline />
          <div className="user-info text-colors-lacivert flex pl-2 pr-2 flex-row justify-center text-center">
            <p className=" pt-3">{user.name}</p>
            <div className=" text-center">
              {user.name && (
                <Avatar
                  src={`https://www.gravatar.com/avatar/${md5(
                    user.email
                  )}?s=24`}
                />
              )}
              {/* {showMessage} */}
            </div>
          </div>
          <Link className=" no-underline" to="/login">
            <span className="hidden md:inline">Login / </span>
          </Link>
          <Link className=" no-underline" to="/signup">
            <span className="hidden md:inline"> Register</span>
          </Link>
          <BiSearch />
          <LiaShoppingCartSolid />1
          <AiOutlineHeart />1
        </div>
      </div>
    </div>
  );
}

export default Navigator;

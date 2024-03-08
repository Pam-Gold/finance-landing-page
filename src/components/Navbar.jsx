import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/pamgold-logo.png";
import { useState } from "react";
import useToggle from "../hooks/useToggle";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const [navDropDown, setNavDropDown] = useToggle();

  return (
    <nav className="h-12 w-full flex items-center justify-between px-2 bg-black text-white fixed z-[50]">
      <div className="h-11 w-12">
        <img className="h-full w-full rounded-lg" src={logo} />
      </div>
      {/*  */}
      <ul className=" gap-x-6 items-center list-none font-poppins text-[1rem] font-bold sm: hidden md: hidden lg:flex xl:flex">
        <li>
          <NavLink>Personal</NavLink>
        </li>
        <li>
          <NavLink>Business</NavLink>
        </li>
        <div>
          <span
            className="flex gap-x-2 items-center cursor-pointer"
            onTouchStart={setNavDropDown}
            onPointerOver={setNavDropDown}
          >
            <li>Company</li>{" "}
            {navDropDown ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </span>
          {navDropDown && (
            <div className="h-[100px] w-[150px] bg-gray-700 text-white flex flex-col absolute top-[50px]  items-center rounded-md">
              <ul className="my-3">
                <li>About Us</li>
                <li>Blog</li>
                <li>Faq</li>
              </ul>
            </div>
          )}
        </div>
        <li>
          <NavLink>Contact Us</NavLink>
        </li>
      </ul>

      <div
        className="h-[35px] w-[25px]   flex-col justify-center items-center gap-y-2  sm: flex md: flex lg:hidden xl:hidden"
        onTouchStart={openMenu}
        onPointerDown={openMenu}
      >
        <div className="h-1 w-full bg-white rounded-lg"></div>
        <div className="h-1 w-full bg-white rounded-lg"></div>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0 }}
            className="z-[100]  fixed top-0 left-0 right-0 bottom-0 bg-black flex flex-col justify-center items-center  gap-y-[25px] [&>*]:text-[1.5rem] font-bold lg:hidden xl:hidden"
          >
            <i
              className="fa-solid fa-close absolute top-[10px] right-[10px] text-3xl"
              onTouchStart={closeMenu}
              onPointerDown={closeMenu}
            ></i>

            <Link>Personal</Link>
            <Link>Business</Link>
            <Link>Company</Link>
            <Link>About Us</Link>
            <Link>Blog</Link>
            <Link>Faq</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

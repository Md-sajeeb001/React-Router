import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const FooterNav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Portfolio", link: "/portfolio" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <div
      className="bg-indigo-600 text-white flex items-center
       justify-between sm:px-14 px-8  py-8 gap-10"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-black">Logo</h2>
        <div
          onClick={() => setOpen(!open)}
          className="transition duration-1000"
        >
          {open ? (
            <IoMdClose className="text-2xl cursor-pointer lg:hidden" />
          ) : (
            <FiMenu className="text-2xl cursor-pointer lg:hidden" />
          )}
        </div>
      </div>

      <div className={`lg:flex gap-10 lg:static absolute p-10 
      ${open ? 'right-6' : '-right-44'} duration-1000 ease-in bg-pink-500 sm:bg-indigo-600 text-black `}>
        {navLinks.map((link) => (
          <ul>
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          </ul>
        ))}
      </div>

      <button className="btn h-full">Demo Button</button>
    </div>
  );
};

export default FooterNav;

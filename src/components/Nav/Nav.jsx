// import { useState } from "react";
import { useState } from "react";
import Link from "../link/link";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  //   const [open, setOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Portfolio", link: "/portfolio" },
    { id: 5, name: "Contact", link: "/contact" },
  ];

  return (
    // <div>
    //   <div className="sm:flex gap-12 px-16 py-8 bg-yellow-400">
    //     <div onClick={() => setOpen(!open)}>
    //       {open ? (
    //           <IoMdClose className="text-xl cursor-pointer md:hidden" />
    //         ) : (
    //           <FiMenu className="text-xl cursor-pointer md:hidden" />
    //       )}
    //     </div>

    //     <div className={ ` absolute duration-1000 transition ease-in-out bg-red-500 px-8 ${open ? 'top-10' : '-top-52'}`}>
    //       {navLinks.map((link) => (
    //         <Link link={link}></Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="bg-indigo-500">
        <div onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <IoMdClose className="text-xl cursor-pointer md:hidden" />
          ) : (
            <FiMenu className="text-xl cursor-pointer md:hidden" />
          )}
        </div>

        <div className={` sm:flex sm:py-4 sm:w-full sm:rounded-none gap-6 
            ${openMenu ? 'left-4' : '-left-64'}
           duration-1000 sm:static absolute bg-yellow-300 text-black px-12 py-6 space-y-3 rounded-xl sm:space-y-0`}>
          {navLinks.map((link) => (
            <Link key={link.id} link={link}></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;

import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { RxCross2 } from "react-icons/rx";

export default function Example() {
  const { user, logOut } = useContext(authContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);

  const navList = (
    <nav
      id="text"
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  font-bold text-white text-base "
    >
      {user?.uid ? (
        <>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          <NavLink>
            <a href="/#Brand">Brand</a>
          </NavLink>
          <NavLink to={"/blog"} className="hover:text-teal-500">
            Blogs
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={"/"}>Home</NavLink>
          <a href="/#Brand">Brand</a>

          <NavLink to={"/blog"}>Blogs</NavLink>
        </>
      )}
    </nav>
  );

  return (
    <Navbar
      id="text"
      className="mx-auto text-white  bg-[#1b3764]    px-4 border-none lg:px-8 rounded-none lg:py-8"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link
          to={"/"}
          className="mr-4 flex  cursor-pointer py-1.5 font-bold text-4xl"
        >
          <img
            className="w-12 h-12 -mt-1"
            src="https://www.shareicon.net/data/128x128/2015/09/25/107069_apple_512x512.png"
            alt=""
          />
          <span className="text-4xl">SmartZone</span>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex">
          {user?.uid ? (
            <>
              <div className="avatar">
                <div className="w-12 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="userImage" src={user?.photoURL} />
                </div>
              </div>
              <Button
                variant="gradient"
                id="text"
                onClick={handleLogOut}
                className="hidden bg-[#941010] py-3 lg:inline-block"
              >
                <span>Sign Out</span>
              </Button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <Button
                  variant="gradient"
                  id="text"
                  className="hidden bg-[#2a2b2c] py-3 lg:inline-block"
                >
                  <span>Sign In</span>
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button
                  variant="gradient"
                  id="text"
                  size="sm"
                  className="hidden ml-3 py-3 bg-blue-500 lg:inline-block"
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6  -mt-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross2 className="text-3xl text-black" />
          ) : (
            <BiMenuAltRight className="text-3xl text-black" />
          )}
        </IconButton>
      </div>
      <MobileNav className="lg:hidden " open={openNav}>
        {navList}
        <Link to={"/login"}>
          <Button
            variant="gradient"
            size="sm"
            id="text"
            className=" bg-[#2a2b2c] lg:hidden    py-3 px-10 "
          >
            <span>Sign In</span>
          </Button>
        </Link>
        <Link to={"/register"}>
          <Button className="py-3 block lg:hidden  mx-auto px-9 mt-3 ">
            <span>Sign Up</span>
          </Button>
        </Link>
      </MobileNav>
    </Navbar>
  );
}

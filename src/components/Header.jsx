import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../context/AuthProvider";

export default function Example() {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <nav className=" font-bold text-base md:ml-auto">
      {user?.uid ? (
        <>
          {" "}
          <NavLink to={"/"} className="mr-5 hover:text-teal-500">
            Home
          </NavLink>
          <NavLink to={"/dashboard"} className="mr-5 hover:text-teal-500">
            Dashboard
          </NavLink>
          <NavLink to={"/blog"} className="hover:text-teal-500">
            Blogs
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={"/"} className="mr-5 hover:text-teal-500">
            Home
          </NavLink>

          <NavLink to={"/blog"} className="hover:text-teal-500">
            Blogs
          </NavLink>
        </>
      )}
    </nav>
  );

  return (
    <Navbar className="mx-auto bg-[#cbe5d3] py-40   px-4 lg:px-8 rounded-none lg:py-8">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/home"} className="mr-4 cursor-pointer py-1.5 font-normal">
          <span>SmartZone</span>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex">
          {user?.uid ? (
            <Button
              variant="gradient"
              size="sm"
              onClick={handleLogOut}
              className="hidden lg:inline-block"
            >
              <span>Sign Out</span>
            </Button>
          ) : (
            <>
              <Link to={"/login"}>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign In</span>
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden ml-3 bg-blue-500 lg:inline-block"
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}

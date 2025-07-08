import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


export default function Header() {


  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2 items-start">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Ali</span>
        Blogs
      </Link>

      <form className="items-center border border-amber-50 px-1 rounded hidden lg:flex">
          <input className="focus:outline-none" type="text" placeholder="Search" id="search"/>
          <span className="cursor-pointer"><AiOutlineSearch/></span>
      </form>

      <Button className="px-3 border border-amber-50 lg:hidden">
        <AiOutlineSearch/>
      </Button>


      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
          <FaMoon />
        </Button>

        <Link to={'signin'}>
          <Button outline pill>
            Sign In
          </Button>
        </Link>

      </div>

    <Navbar fluid rounded>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as={'div'}>
          <Link to="\">
            Home
          </Link>
        </NavbarLink>
        <NavbarLink active={path === "/about"} as={'div'}>
          <Link to='/about'>
            About
          </Link>
        </NavbarLink>
        <NavbarLink active={path === "/projects"} as={'div'}>
          <Link to="/projects">
            Projects
          </Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>


    </Navbar>
  )
}

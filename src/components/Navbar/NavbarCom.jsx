import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavbarCom = () => {
  const cartItem = useSelector((state) => state.cartItem);
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href='https://flowbite-react.com'>
          <img
            alt='Flowbite React Logo'
            className='mr-3 h-6 sm:h-9 rounded-full'
            src={logo}
          />
          <span className='self-center whitespace-nowrap text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600'>
            MOORAN
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2 items-center gap-5'>
          <div className=' p-2 rounded-full '>
            <button className='relative '>
              <span className='font-bold text-red-600 absolute'>
                {cartItem.length}
              </span>
              <BsCart2 className='w-6 h-6 relative top-3' />
            </button>
          </div>
          <Dropdown
            inline
            label={
              <Avatar
                alt='User settings'
                img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                rounded
              />
            }>
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to={"/"}>Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to={"/products"}>Products </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink>Contact</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCom;

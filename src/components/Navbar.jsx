import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <a href='https://blog-ryocv.vercel.app/' target='_blank' rel='noreferrer' className="text-black">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

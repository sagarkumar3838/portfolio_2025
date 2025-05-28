import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import { NAVIGATION_LINKS } from "../constants/Index";


const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      useEffect(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, [offsetPosition]);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-2 z-50">
      <div className="mx-auto hidden md:max-w-2xl  lg:max-w-5xl items-center justify-center rounded-md bg-[#090923]/30 py-2 backdrop-blur-lg lg:flex">
      {/* <div className="mx-auto hidden md:max-w-2xl  lg:max-w-5xl items-center justify-center rounded-md bg-white  py-2 backdrop-blur-lg lg:flex">   */}
        <div className="flex justify-between gap-40">
          <div>
            <a href="#">
              <img src="/images/LOGO.png" alt="Logo" className="w-10 h-10 rounded-lg bg-[#090923] " />
            </a>
          </div>
          <div>
            <ul className="flex items-center justify-center text-center gap-16">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    className="text-sm md:text-2xl hover:text-gray-400"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className="rounded-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <a href="">
              <img src='/images/LOGO.png' width={90} alt='logo' className='m-2 w-[40px] rounded-full' />
            </a>
          </div>
          <div className="flex items-center">
            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
              {
                isMobileMenuOpen ? (
                  <FontAwesomeIcon icon={faX} className="m-2 h-6 w-5" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="m-2 h-6 w-5" />
                )
              }
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <Link to={item.href}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  className="block w-full text-xl font-semibold"
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-label={item.label}
                  aria-expanded={isMobileMenuOpen}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
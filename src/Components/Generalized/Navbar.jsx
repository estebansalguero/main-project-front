import { useState } from "react";
import logo from "../../assets/images/empanada.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/Reviews" },
];

export const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-em_orange to-em_yellow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-em_white lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <img className="h-10 w-auto" src={logo} alt="Empanadas Review" />
            </a>
            <a href="/" className="font-semibold text-em_white ml-3">
              <span className="hidden md:inline-block">Empanadas Review</span>
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-em_white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {sessionStorage.getItem("userName") === null ? (
            <div className="ml-10 space-x-4">
              <a
                href="/Login"
                className="inline-block bg-em_brown py-2 px-4 rounded-md text-base font-medium text-em_white hover:bg-em_brown_hover"
              >
                Log in
              </a>
              <a
                href="/Signin"
                className="inline-block bg-em_brown py-2 px-4 rounded-md text-base font-medium text-em_white hover:bg-em_brown_hover"
              >
                Sign up
              </a>
            </div>
          ) : (
            <a
              href="/Profile"
              className="inline-block bg-em_brown py-2 px-4 rounded-md text-base font-medium text-em_white hover:bg-em_brown_hover"
            >
              {sessionStorage.getItem("userName")}
            </a>
          )}
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
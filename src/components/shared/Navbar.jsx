import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section>
      <div class="navbar bg-slate-400">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img class="w-12" alt="Book Heaven Logo" src={logo} />
          <a class="btn btn-ghost text-blue-600 text-2xl">Book Heaven</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal text-black px-1">
            <li>
              <a class="text-green-200 text-xl font-bold">Home</a>
            </li>
            <li>
              <a class="text-green-200 text-xl font-bold">About</a>
            </li>
            <li>
              <a class="text-green-200 text-xl font-bold">Blog</a>
            </li>
            <li>
              <Link to="/faq" class="text-green-200 text-xl font-bold">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end gap-2">
          <a class="btn bg-orange-600 hover:bg-orange-400 border-orange-600 text-black font-bold">
            Buy Book
          </a>
          <Link
            to="/login"
            class="btn bg-cyan-500 hover:bg-cyan-400 border-cyan-500 text-black font-bold"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
};

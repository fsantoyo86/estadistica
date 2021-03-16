import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
      <div className="bg-green-700 px-2">
        <nav className="flex justify-between items-center h-10 bg-green-700 border-b-solid border-b-2 border-gray-400 text-white text-md">
          <div className="pr-8">
            <NavLink
              to="/"
              exact
              className="p-4 hover:text-gray-200"
              activeClassName="py-3 text-gray-300 p-4"
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/"
              className="p-4 hover:text-gray-200"
              activeClassName="py-3 text-gray-300 p-4"
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/"
              exact
              className="p-4 hover:text-gray-200"
              activeClassName="py-3 text-gray-300 p-4"
            >
              Support
            </NavLink>{" "}
          </div>
        </nav>
        <div className="bg-green-700 h-32 px-4 text-4xl text-white py-10">
          México Estadística
        </div>
      </div>
    );
}

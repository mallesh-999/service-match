import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Service-Match</h1>
      <ul className="flex gap-4">
        <li>
          <a href="/" className="hover:text-blue-500">Home</a>
        </li>
        <li>
          <a href="/jobs" className="hover:text-blue-500">Jobs</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-500">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

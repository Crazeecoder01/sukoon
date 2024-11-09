import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/auth/login";
import LogoutButton from "../components/auth/logout";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between  items-center">
      <h1 className="text-xl">Project Name</h1>
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
};

export default Navbar;
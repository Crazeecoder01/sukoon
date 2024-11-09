// Dashboard
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Profile from "../auth/profile";

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex min-h-screen">
      <aside className="bg-gray-800 text-white w-64 p-4 hidden md:block">
        <h2 className="text-xl mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Link 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Link 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Link 3
            </a>
          </li>
        </ul>
      </aside>
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 flex flex-col items-center md:flex-row md:justify-around">
          {isAuthenticated && <Profile />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
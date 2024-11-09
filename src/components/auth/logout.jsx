import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
<div className="flex justify-center items-center h-screen bg-gray-100">
  <button 
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
    className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
  >
    Log Out
  </button>
</div>

  );
};

export default LogoutButton;
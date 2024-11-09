import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Log In</button>;
};

export default LoginButton;
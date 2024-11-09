import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from '@mui/material/Button';  

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (

    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <button
    //     onClick={() => loginWithRedirect()}
    //     className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
    //   >
    //     Log In
    //   </button>
    // </div>
    <>
    <Button onClick={() => loginWithRedirect()} variant="contained">Login</Button>

    </>
  )
};

export default LoginButton;
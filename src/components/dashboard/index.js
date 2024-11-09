import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../auth/profile";
import { db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const checkUserInDB = async () => {
      if (user) {
        const userRef = doc(db, "userDetails", user.nickname);
        const userSnap = await getDoc(userRef);

        // If user does not exist, add the user data
        if (!userSnap.exists()) {
          await setDoc(userRef, { ...user });
          console.log("User data added to Firestore");
        } else {
          console.log("User already exists in Firestore");
        }
      }
    };

    checkUserInDB();
  }, [user]);

  return (
    <div className="flex min-h-screen">
      <aside className="flex bg-gray-800 text-white w-64 p-4 flex-col">
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
        <div className="h-auto w-full grow"></div>
        {isAuthenticated && <Profile />}
      </aside>
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 flex flex-col items-center md:flex-row md:justify-around">
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex justify-between items-center h-[10vh] w-full px-10">
      <div className="w-[80%] h-full flex">
        <div className="w-[40%] h-full flex justify-start items-center text-4xl font-medium bg-gradient-to-r from-amber-300 via-amber-500 to-orange-600 text-transparent bg-clip-text">
        Eduverse
        </div>
        <div className="w-[60%] h-full flex gap-10 justify-end items-center">
        <Link to="/videos">
          <Button variant="ghost" size="lg">
            Videos
          </Button>
        </Link>
        <Link to="/recommendations">
          <Button variant="ghost" size="lg">
            Recommendations
          </Button>
        </Link>
        <Link to="/quiz">
          <Button variant="ghost" size="lg">
            Quiz
          </Button>
        </Link>
        </div>
      </div>
      <div className="h-full w-[20%] flex items-center justify-end">
        {!isAuthenticated ? (
          <Button
            variant="ghost"
            size="lg"
            className="bg-amber-500"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
        ) : (
          <Button
            className="bg-amber-500"
            variant="ghost"
            size="lg"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

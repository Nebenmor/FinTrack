import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import {Navigate} from "react-router-dom"

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <div className="auth-buttons">
      <SignedOut>
        <SignUpButton mode = 'modal'/>
        <SignInButton mode = 'modal' />
      </SignedOut>
      <SignedIn>
        <Navigate to="/" ></Navigate>
      </SignedIn>
      </div>
      
    </div>
  );
};

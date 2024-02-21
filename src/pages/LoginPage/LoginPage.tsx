import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { User } from "@/models/user";

import "./LoginPage.scss";

type LoginPageProps = {
  setUser: Dispatch<SetStateAction<User | null>>;
};

export function LoginPage({ setUser }: LoginPageProps) {
  const navigate = useNavigate();

  return (
    <section className="login">
      <h1>Please login:</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential ?? "");
          setUser(decoded as User);
          navigate("/");
        }}
        onError={() => {
          alert("Login Failed. Try again later.");
          console.warn("Login Failed");
        }}
      />
    </section>
  );
}

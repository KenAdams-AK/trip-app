import { useCallback } from "react";

import { googleLogout } from "@react-oauth/google";

import { User } from "@/models/user";

import { useLocalStorage } from "./useLocalStorage";

const ONE_DAY_IN_SECONDS = 1000 * 60 * 60 * 24;

export function useCurrentUser() {
  const [user, setUser] = useLocalStorage<User | null>(
    "user",
    null,
    ONE_DAY_IN_SECONDS,
  );

  const handleLogout = useCallback(() => {
    if (window.confirm("Are you sure you want to log out?")) {
      setUser(null);
      googleLogout();
    }
  }, [setUser]);

  return { user, setUser, handleLogout };
}

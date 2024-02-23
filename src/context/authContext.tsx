import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
} from "react";

import { googleLogout } from "@react-oauth/google";

import { User } from "@/models/user";

import { localStorageKeys } from "@/constants/storageKeys";

import { useLocalStorage } from "@/hooks/useLocalStorage";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextT = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  handleLogout: () => void;
};

const ONE_DAY_IN_SECONDS = 1000 * 60 * 60 * 24;

export const AuthContext = createContext({} as AuthContextT);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useLocalStorage<User | null>(
    localStorageKeys.user,
    null,
    ONE_DAY_IN_SECONDS,
  );

  const handleLogout = useCallback(() => {
    if (window.confirm("Are you sure you want to log out?")) {
      setUser(null);
      googleLogout();
    }
  }, [setUser]);

  const context = useMemo(
    () => ({ user, setUser, handleLogout }),
    [user, setUser, handleLogout],
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

"use client";

import { account, client } from "@/lib/appwrite/appwrite";
import { AppwriteException, Models, ID } from "appwrite";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// create user state model
export interface UserState {
  user: Models.User<Models.Preferences> | null;
  loading: boolean;
  error: string | null;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, passowrd: string, name: string) => Promise<void>;
}
// create the default for that model
const defaultState: UserState = {
  user: null,
  loading: true,
  error: null,
  logout: async () => {},
  login: async () => {},
  signup: async () => {},
};

// create context
const userContext = createContext<UserState>(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  // establish states
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAccount = async () => {
    try {
      const loadedAccount = await account.get();
      setUser(loadedAccount);
    } catch (err) {
      console.error(err);
      setError("Failed to load user.");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailSession(email, password);
      await loadAccount();
    } catch (err) {
      const appwriteException = err as AppwriteException;
      console.error(appwriteException.message);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      const session = await account.create(ID.unique(), email, password, name);
      setUser(session);
      await account.createEmailSession(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  // load account on mount
  useEffect(() => {
    loadAccount();
  }, []);

  return (
    <userContext.Provider
      value={{ user, loading, error, logout, login, signup }}
    >
      {children}
    </userContext.Provider>
  );
};

export const UseUser = () => {
  const context = useContext<UserState>(userContext);

  return context;
};
